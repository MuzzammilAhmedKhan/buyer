import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/common/book';
import { CartItem } from 'src/app/common/cart-item';
import { Category } from 'src/app/common/category';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book;
  category:Category[];
  
  constructor(private bookService: BookService, 
    private cartService: CartService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleBookDetails();
    })
  }

  

  handleBookDetails(){
    const bookId = +this.route.snapshot.paramMap.get("id");
    console.log(bookId);
    this.bookService.getBook(bookId).subscribe(
      data => {
        this.book = data;
      }
    );
  }

  addToCart(){
    console.log(`Adding to cart:${this.book.bookName},${this.book.unitPrice}`);
    const cartItem:CartItem = new CartItem(this.book);
    this.cartService.addToCart(cartItem);
  }

}
 