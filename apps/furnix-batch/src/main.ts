import { NestFactory } from '@nestjs/core';
import { FurnixBatchModule } from './furnix-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(FurnixBatchModule);
  await app.listen(process.env.PORT_BATCH ?? 3000);
}
bootstrap();
