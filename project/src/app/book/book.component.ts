import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  books: Book[];

  book: Book;

  constructor(){
    this.book = {title: "Title", author: "Author", pagecount: 100}

    this.books = [
      {title: "Title", author: "Author", pagecount: 100},
      {title: "Title2", author: "Author2", pagecount: 200},
      {title: "Title3", author: "Author3", pagecount: 300}
    ]
  }
}

interface Book{
  title: string;
  author: string;
  pagecount: number
}
