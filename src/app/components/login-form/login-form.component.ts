import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/user';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  userModel:User = new User();
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    //Todo check from REST api
    this.userModel.id = 1;

    if(this.userModel.id > 0){
      //temp logic
      this.bookService.checkUser(this.userModel);
    }

    console.log(localStorage.getItem("logged"));
  }

}
