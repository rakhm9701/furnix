import { Injectable } from '@nestjs/common';

@Injectable()
export class FurnixBatchService {
  getHello(): string {
    return 'Hello World!';
  }
}
