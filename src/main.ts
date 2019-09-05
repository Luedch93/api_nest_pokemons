/* istanbul ignore file */
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import mongoose = require('mongoose');
import dotenv = require('dotenv');

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  await app.listen(3000);
  await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
}
bootstrap();
