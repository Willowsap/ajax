import { Component, OnInit } from "@angular/core";
import { BookService, Page } from "./book.service";

@Component({
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{

  public book: Array<Page> = [];
  public currPage = 0;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.book = this.bookService.getBook();
  }

  nextPage(): void {
    this.currPage++;
  }

  prevPage(): void {
    this.currPage--;
  }
}
