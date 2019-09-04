/* istanbul ignore file */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose = require('mongoose');
import dotenv = require('dotenv');

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
}
bootstrap();
