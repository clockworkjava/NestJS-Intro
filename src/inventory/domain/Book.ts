import { BookDTO } from "./dto/BookDTO";

export class Book {
  private id: number;
  private title: string;
  private author: string;

  constructor(id: number, title: string, author: string) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  public getAsDTO(): BookDTO {
    return {
      id: this.id,
      title: this.title,
      author: this.author,
    };
  }

  public getId(): number {
    return this.id;
  }
}
