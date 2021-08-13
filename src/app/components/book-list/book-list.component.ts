import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/common/book';
import { CartItem } from 'src/app/common/cart-item';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
 
  books: Book[] = [];
  book: Book;
  currentCategoryId: number = 0;
  searchKey:string;

  constructor(private bookService: BookService, private cartService: CartService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => console.log(params));
  }
 


  ngOnInit(): void {
    this.route.paramMap.subscribe(() => { 
      this.listBooks();
    })
  }
  listBooks() { 
    const hasBookId: boolean = this.route.snapshot.paramMap.has('bookId');
    if (hasBookId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('bookId');
      console.log(this.currentCategoryId);
      this.bookService.getAllBooks(this.currentCategoryId)
        .subscribe(data => {
          console.log(data);
          this.books = data
        });
      
    }else if(this.route.snapshot.paramMap.has('keyWord')){
      console.log(this.searchKey);
      this.searchKey = this.route.snapshot.paramMap.get('keyWord'); 
      this.bookService.searchByName(this.searchKey).subscribe(
        data => {this.books = data}
      );
    } else {
      this.currentCategoryId = 0; 
    }

  }
 
  addToCart(book:Book){
    console.log(`Adding to cart:${book.bookName},${book.unitPrice}`);
    const cartItem:CartItem = new CartItem(book);
    console.log(book);
    this.cartService.addToCart(cartItem);
  }

}
