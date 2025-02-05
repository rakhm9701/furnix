import { Test, TestingModule } from '@nestjs/testing';
import { FurnixBatchController } from './furnix-batch.controller';
import { FurnixBatchService } from './furnix-batch.service';

describe('FurnixBatchController', () => {
  let furnixBatchController: FurnixBatchController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FurnixBatchController],
      providers: [FurnixBatchService],
    }).compile();

    furnixBatchController = app.get<FurnixBatchController>(FurnixBatchController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(furnixBatchController.getHello()).toBe('Hello World!');
    });
  });
});
