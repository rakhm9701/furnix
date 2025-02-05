import { Controller, Get } from '@nestjs/common';
import { FurnixBatchService } from './furnix-batch.service';

@Controller()
export class FurnixBatchController {
  constructor(private readonly furnixBatchService: FurnixBatchService) {}

  @Get()
  getHello(): string {
    return this.furnixBatchService.getHello();
  }
}
