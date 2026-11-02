import { Module } from '@nestjs/common';
import { BooksController } from './controller.js';
import { BooksService } from './books.service.js';
import { BookEntity } from './entities/book-entitiy.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity])],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {
  
}

