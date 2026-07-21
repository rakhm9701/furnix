import { Args, ID, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { MemberType } from '../../libs/enums/member.enum';
import { Faq, Faqs } from '../../libs/dto/notice/notice';
import { CreateFaqInput, FaqFilterInput, UpdateFaqInput } from '../../libs/dto/notice/notice.input';
import { shapeOfMongoObjectId } from '../../libs/config';
import { AuthMember } from '../auth/decorators/authMember.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../auth/gaurds/roles.guard';
import { NoticeService } from './notice.service';

@Resolver()
export class NoticeResolver {
	constructor(private readonly noticeService: NoticeService) {}

	@Query(() => Faqs)
	public async faqs(
		@Args('filter', { nullable: true }) filter: FaqFilterInput,
		@Args('page', { type: () => Int, nullable: true }) page: number,
		@Args('limit', { type: () => Int, nullable: true }) limit: number,
	): Promise<Faqs> {
		console.log('Query: faqs');
		return await this.noticeService.getFaqs(filter, page, limit);
	}

	@Roles(MemberType.ADMIN)
	@UseGuards(RolesGuard)
	@Query(() => Faq)
	public async getFaq(@Args('id', { type: () => ID }) id: string): Promise<Faq> {
		console.log('Query: getFaq');
		const faqId = shapeOfMongoObjectId(id);
		return await this.noticeService.getFaq(faqId);
	}

	@Roles(MemberType.ADMIN)
	@UseGuards(RolesGuard)
	@Mutation(() => Faq)
	public async createFaq(
		@Args('input') input: CreateFaqInput,
		@AuthMember('_id') memberId: ObjectId,
	): Promise<Faq> {
		console.log('Mutation: createFaq');
		return await this.noticeService.createFaq(memberId, input);
	}

	@Roles(MemberType.ADMIN)
	@UseGuards(RolesGuard)
	@Mutation(() => Faq)
	public async updateFaq(
		@Args('id', { type: () => ID }) id: string,
		@Args('input') input: UpdateFaqInput,
	): Promise<Faq> {
		console.log('Mutation: updateFaq');
		const faqId = shapeOfMongoObjectId(id);
		return await this.noticeService.updateFaq(faqId, input);
	}

	@Roles(MemberType.ADMIN)
	@UseGuards(RolesGuard)
	@Mutation(() => Boolean)
	public async deleteFaq(@Args('id', { type: () => ID }) id: string): Promise<boolean> {
		console.log('Mutation: deleteFaq');
		const faqId = shapeOfMongoObjectId(id);
		return await this.noticeService.deleteFaq(faqId);
	}
}
