import { Module } from '@nestjs/common';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

import { BooksService } from './books/books.service.js';
import { BooksController } from './books/controller.js';

import { AuthModule } from './auth/auth.module.js';

@Module({
  imports: [AuthModule],
  controllers: [AppController, BooksController],
  providers: [AppService, BooksService],
})
export class AppModule {}