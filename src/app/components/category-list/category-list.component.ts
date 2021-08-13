//category-list is the book_category table in MySQL-->
//category-list is the book_category table in MySQL-->
//category-list is the book_category table in MySQL-->
//category-list is the book_category table in MySQL-->
//category-list is the book_category table in MySQL-->
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { Category } from 'src/app/common/category';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  books:Book[] = [];

  categories:Category[] = [];
  

  constructor(private categoryService:BookService) { }

  ngOnInit(): void {
    this.listCategories();
  }

  listCategories(){
    this.categoryService.getAllCategories()
    .subscribe(data => {
      console.log(data);
      this.categories = data;
    });
  }
  exploreAll(){
    this.categoryService.exploreAll().subscribe(
      data => {this.books = data}
    );
  }

}
