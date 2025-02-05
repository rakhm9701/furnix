import { Module } from '@nestjs/common';
import { FurnixBatchController } from './furnix-batch.controller';
import { FurnixBatchService } from './furnix-batch.service';

@Module({
  imports: [],
  controllers: [FurnixBatchController],
  providers: [FurnixBatchService],
})
export class FurnixBatchModule {}
