import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class BookSearchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getSearchWord(searchKey:string){
    console.log("search: " + searchKey);
    this.router.navigateByUrl(`search/${searchKey}`); 
  } 

 // searchbook(searchKeyWord:string){
    //console.log(searchKeyWord);
   // this.router.navigateByUrl(`search/${searchKeyWord}`);
 // }
}