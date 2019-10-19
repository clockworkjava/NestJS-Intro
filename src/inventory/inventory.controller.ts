import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from "@nestjs/common";
import { InventoryRepository } from "./inventory.repository";
import { BookDTO } from "./domain/dto/BookDTO";
import { get } from "https";

@Controller("/inventory")
export class InventoryController {
  private repository: InventoryRepository;

  constructor(repo: InventoryRepository) {
    this.repository = repo;
  }

  @Post()
  public createNewBook(@Body() bookDTO: BookDTO): void {
    this.repository.createBook(bookDTO);
  }

  @Get()
  public getAllBooks(): BookDTO[] {
    return this.repository.getAllBooksDTO();
  }

  @Get("/:id")
  public getBook(@Param("id") id: string): BookDTO {
    return this.repository.getBookById(Number.parseInt(id));
  }

  @Put("/:id")
  public updateBook(@Param("id") id: string, @Body() bookDTO: BookDTO): void {
    this.repository.updateBook(Number.parseInt(id, 10), bookDTO);
  }

  @Delete("/:id")
  public deleteBook(@Param("id") id: string): void {
    this.repository.deleteBook(Number.parseInt(id, 10));
  }
}
