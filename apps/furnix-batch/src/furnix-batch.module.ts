import { Module } from '@nestjs/common';
import { FurnixBatchController } from './furnix-batch.controller';
import { FurnixBatchService } from './furnix-batch.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule],
  controllers: [FurnixBatchController],
  providers: [FurnixBatchService],
})
export class FurnixBatchModule {}
