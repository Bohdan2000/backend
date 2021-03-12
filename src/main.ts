import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // const conn = await createConnection();
  // conn.runMigrations();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
