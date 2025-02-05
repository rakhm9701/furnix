import { Module } from '@nestjs/common';
import { FurnixBatchController } from './furnix-batch.controller';
import { FurnixBatchService } from './furnix-batch.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [FurnixBatchController],
  providers: [FurnixBatchService],
})
export class FurnixBatchModule {}
