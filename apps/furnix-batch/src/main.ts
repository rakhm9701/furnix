import { NestFactory } from '@nestjs/core';
import { FurnixBatchModule } from './furnix-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(FurnixBatchModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
