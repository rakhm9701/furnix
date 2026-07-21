import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Message } from '../../libs/enums/common.enum';
import { NoticeCategory, NoticeStatus } from '../../libs/enums/notice.enum';
import { Faq, Faqs } from '../../libs/dto/notice/notice';
import { CreateFaqInput, FaqFilterInput, UpdateFaqInput } from '../../libs/dto/notice/notice.input';
import { T } from '../../libs/types/common';

@Injectable()
export class NoticeService {
	constructor(@InjectModel('Notice') private readonly noticeModel: Model<Faq>) {}

	private shapeFaq(notice: any): Faq {
		const data = notice?.toObject ? notice.toObject() : notice;

		return {
			...data,
			id: String(data._id),
			memberId: String(data.memberId) as unknown as ObjectId,
		};
	}

	public async getFaqs(filter: FaqFilterInput = {}, page = 1, limit = 20): Promise<Faqs> {
		const safePage = Math.max(1, page);
		const safeLimit = Math.min(Math.max(1, limit), 100);
		const match: T = {
			noticeCategory: NoticeCategory.FAQ,
			noticeStatus: filter?.status ?? { $ne: NoticeStatus.DELETE },
		};

		if (filter?.search) {
			match.$or = [
				{ noticeTitle: { $regex: new RegExp(filter.search, 'i') } },
				{ noticeContent: { $regex: new RegExp(filter.search, 'i') } },
			];
		}

		const [items, total] = await Promise.all([
			this.noticeModel
				.find(match)
				.sort({ createdAt: -1 })
				.skip((safePage - 1) * safeLimit)
				.limit(safeLimit)
				.exec(),
			this.noticeModel.countDocuments(match).exec(),
		]);

		return {
			items: items.map((item) => this.shapeFaq(item)),
			total,
			page: safePage,
			limit: safeLimit,
		};
	}

	public async getFaq(id: ObjectId): Promise<Faq> {
		const result = await this.noticeModel.findOne({ _id: id, noticeCategory: NoticeCategory.FAQ }).exec();
		if (!result) throw new InternalServerErrorException(Message.N0_DATA_FOUND);

		return this.shapeFaq(result);
	}

	public async createFaq(memberId: ObjectId, input: CreateFaqInput): Promise<Faq> {
		try {
			const result = await this.noticeModel.create({
				noticeCategory: NoticeCategory.FAQ,
				noticeStatus: input.status ?? NoticeStatus.ACTIVE,
				noticeTitle: input.title,
				noticeContent: input.content,
				memberId,
			});

			return this.shapeFaq(result);
		} catch (err) {
			console.log('Error, NoticeService.createFaq:', err.message);
			throw new BadRequestException(Message.CREATE_FAILED);
		}
	}

	public async updateFaq(id: ObjectId, input: UpdateFaqInput): Promise<Faq> {
		const update: T = {};

		if (input.title !== undefined) update.noticeTitle = input.title;
		if (input.content !== undefined) update.noticeContent = input.content;
		if (input.status !== undefined) update.noticeStatus = input.status;

		const result = await this.noticeModel
			.findOneAndUpdate({ _id: id, noticeCategory: NoticeCategory.FAQ }, update, { new: true })
			.exec();

		if (!result) throw new InternalServerErrorException(Message.UPDATE_FAILE);
		return this.shapeFaq(result);
	}

	public async deleteFaq(id: ObjectId): Promise<boolean> {
		const result = await this.noticeModel
			.findOneAndUpdate(
				{ _id: id, noticeCategory: NoticeCategory.FAQ },
				{ noticeStatus: NoticeStatus.DELETE },
				{ new: true },
			)
			.exec();

		if (!result) throw new InternalServerErrorException(Message.REMOVE_FAILE);
		return true;
	}
}
