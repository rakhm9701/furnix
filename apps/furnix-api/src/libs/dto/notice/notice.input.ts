import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, Length } from 'class-validator';
import { NoticeStatus } from '../../enums/notice.enum';

@InputType()
export class FaqFilterInput {
	@IsOptional()
	@Field(() => NoticeStatus, { nullable: true })
	status?: NoticeStatus;

	@IsOptional()
	@Field(() => String, { nullable: true })
	search?: string;
}

@InputType()
export class CreateFaqInput {
	@IsNotEmpty()
	@Length(3, 200)
	@Field(() => String)
	title: string;

	@IsNotEmpty()
	@Length(3, 3000)
	@Field(() => String)
	content: string;

	@IsOptional()
	@Field(() => NoticeStatus, { nullable: true })
	status?: NoticeStatus;
}

@InputType()
export class UpdateFaqInput {
	@IsOptional()
	@Length(3, 200)
	@Field(() => String, { nullable: true })
	title?: string;

	@IsOptional()
	@Length(3, 3000)
	@Field(() => String, { nullable: true })
	content?: string;

	@IsOptional()
	@Field(() => NoticeStatus, { nullable: true })
	status?: NoticeStatus;
}
