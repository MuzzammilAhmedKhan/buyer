import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/common/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  books:Book[] = [];
  constructor(private bookService: BookService, private router:Router) {
    //this.route.params.subscribe(params => console.log(params));
   }

  ngOnInit(): void {
  }

  getSearchWord(searchKey:string){
    console.log("search: " + searchKey);
    this.router.navigateByUrl(`search/${searchKey}`); 
  } 

  exploreAll(){
    this.bookService.exploreAll().subscribe(
      data => {this.books = data}
    );
  }

}
