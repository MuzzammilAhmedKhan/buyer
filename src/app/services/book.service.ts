import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../common/book';
import { map } from "rxjs/operators";
import { Category } from '../common/category';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  exploreAll():Observable<Book[]>{
    return this.httpClient.get<Book[]>(this.bookUrl);
  }
  
  private bookUrl = "http://localhost:8080/magic-api/book"; 
  private categoryUrl = "http://localhost:8080/magic-api/category";
  private findByBookUrl = "http://localhost:8080/magic-api/book/search/findByBook?categoryId="; //<-----find by category id
  private findByBookName = "http://localhost:8080/magic-api/book/search/findByBookNameContainsAllIgnoreCase?bookname=";


  constructor(private httpClient: HttpClient) { } 

  getBook(bookId: number):Observable<Book>{ 
    console.log(this.bookUrl+bookId);
      return this.httpClient.get<Book>(this.bookUrl+`/${bookId}`);
    
  }

  /*getBook(BookId: number):Observable<Book> {
      const bookDetailUrl = `${this.bookUrl}/${BookId}`; 

      return this.httpclient.get<Book>(bookDetailUrl);
    } */

  getAllBooks(bookId:number):Observable<Book[]>{
   
    if(bookId == 0){
    return this.httpClient.get<GetResponseBook>(this.bookUrl)
    .pipe(map((response) => response._embedded.books));
    }else{
      console.log(this.findByBookUrl+bookId);
      return this.httpClient.get<GetResponseBook>(this.findByBookUrl+bookId)
    .pipe(map((response) => response._embedded.books));
    }
    
  }


  getAllCategories(): Observable<Category[]> {

    return this.httpClient.get<GetResponseCategory>(this.categoryUrl)
      .pipe(map((response) => response._embedded.bookCategories));
  }

  searchByName(Key:string): Observable<Book[]>{
    console.log(this.findByBookName+Key);
    return this.httpClient.get<GetResponseBook>(this.findByBookName+Key)
    .pipe(map((response) => response._embedded.books));

  }

  checkUser(user:User){
    //temp logic , assuming user is present
   localStorage.setItem("logged","true");
  }
}

interface GetResponseBook {
  _embedded: {
    books: Book[]
  }
}

interface GetResponseOneBook{
  _embedded:{
    books: Book
  }
}

interface GetResponseCategory {
  _embedded: {
    bookCategories: Category[]
  }
}
