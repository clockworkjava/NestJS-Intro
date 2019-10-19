import { Injectable } from "@nestjs/common";
import { Book } from "./domain/Book";
import { BookDTO } from "./domain/dto/BookDTO";

@Injectable()
export class InventoryRepository {
  private books: Book[];

  constructor() {
    this.books = [];
  }

  public createBook(data: BookDTO): void {
    this.books.push(new Book(data.id, data.title, data.author));
  }

  public getAllBooksDTO(): BookDTO[] {
    return this.books.map(book => book.getAsDTO());
  }

  public getBookById(id: number): BookDTO {
    return this.books
      .filter(book => book.getId() === id)
      .map(book => book.getAsDTO())[0];
  }

  public updateBook(id: number, data: BookDTO): void {
    const updatedBooks = this.books.filter(book => book.getId() !== id);
    updatedBooks.push(new Book(data.id, data.title, data.author));
    this.books = updatedBooks;
  }

  public deleteBook(id: number): void {
    const updatedBooks = this.books.filter(book => book.getId() !== id);
    this.books = updatedBooks;
  }
}
