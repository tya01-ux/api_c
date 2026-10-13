import { Injectable } from '@nestjs/common';
import { Book } from './entities/book-entitiy.js';
import { CreateBookDto } from './dto/create-book-dto.js';

@Injectable()
export class BooksService {

  // data dari database
  private books: Book[] = [
    {
      id: 1,
      name: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      isbn: '978-0-7432-7356-5',
      publisher: 1925,
      isAvailable: true,
    },
    {
      id: 2,
      name: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      isbn: '978-0-06-112008-4',
      publisher: 1960,
      isAvailable: true,
    },
  ];

  // Menampilkan semua buku
  findAll(): Book[] {
    return this.books;
  }

  // Menampilkan buku berdasarkan id
  findOne(id: number): Book | undefined {
    return this.books.find((book) => book.id === id);
  }

  // Menyimpan data buku baru
  create(book: CreateBookDto): Book {
    const newBook: Book = {
      id: this.books.length + 1,
      name: book.name,
      author: book.author,
      isbn: book.isbn,
      publisher: book.publisher,
      isAvailable: true,
    };

    this.books.push(newBook);

    return newBook;
  }

    // Mengupdate data buku berdasarkan id
    update(id: number, book: CreateBookDto): Book | undefined {
        const existingBook = this.books.find((b) => b.id === id);
        if (existingBook) {
            existingBook.name = book.name;
            existingBook.author = book.author;
            existingBook.isbn = book.isbn;
            existingBook.publisher = book.publisher;
            return existingBook;
        }

        return undefined;
    }

    // Menghapus data buku berdasarkan id
    delete(id: number): boolean {
        const index = this.books.findIndex((b) => b.id === id);
        if (index !== -1) {
            this.books.splice(index, 1);
            return true;
        }
        return false;
    }
}