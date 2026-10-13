import { Module } from '@nestjs/common';
import { BooksController } from './controller.js';
import { BooksService } from './books.service.js';

@Module({
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {
  
}
