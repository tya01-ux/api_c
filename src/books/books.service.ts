
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookEntity } from './entities/book-entitiy.js';
import { CreateBookDto } from './dto/create-book-dto.js';

@Injectable()
export class BooksService {
  // Menghubungkan service dengan repository database
  constructor(
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
  ) {}

  // Menampilkan semua buku, terbaru di urutan pertama
  async findAll(): Promise<BookEntity[]> {
    return this.bookRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  // Mengambil data buku berdasarkan ID
  async findOne(id: string): Promise<BookEntity> {
    const book = await this.bookRepository.findOneBy({ id });

    if (!book) {
      throw new NotFoundException(
        `Buku dengan ID ${id} tidak ditemukan`,
      );
    }

    return book;
  }

  // Menyimpan buku baru
  async create(book: CreateBookDto): Promise<BookEntity> {
    const newBook = this.bookRepository.create(book);
    return this.bookRepository.save(newBook);
  }

  // Mengupdate buku berdasarkan ID
  async update(
    id: string,
    book: CreateBookDto,
  ): Promise<BookEntity> {
    const existingBook = await this.findOne(id);

    Object.assign(existingBook, book);

    return this.bookRepository.save(existingBook);
  }

  // Menghapus buku berdasarkan ID
  async delete(
    id: string,
  ): Promise<{ message: string; deletedId: string }> {
    await this.findOne(id);

    await this.bookRepository.delete(id);

    return {
      message: `Buku dengan ID ${id} berhasil dihapus`,
      deletedId: id,
    };
  }
}
