import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { OrderConfirmComponent } from './components/order-confirm/order-confirm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookSearchComponent } from './components/search/search.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';

 

const routes:Routes = [
  {path:'bookdetail/:id', component:BookDetailsComponent}, 
  {path:'cart-details',component:CartDetailsComponent},
  {path:'book',component:BookListComponent},
  //{path:'category/:categoryId',component:BookListComponent},
  {path:'category',component:BookListComponent},
  {path:'search/:keyWord',component:BookListComponent}, 
  {path:'confirmOrder',component:OrderConfirmComponent},
  {path:'category/:bookId', component:BookListComponent},
  {path:'login',component:LoginFormComponent},
  {path:'books', component:BookListComponent},
  //{path:'search/:searchKey', component:BookListComponent},
  {path: '', component:LandingPageComponent},
  {path: 'welcome', component:LandingPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    CategoryListComponent,
    LandingPageComponent,
    BookSearchComponent,
    CartDetailsComponent,
    LoginFormComponent,
    PagenotfoundComponent,
    BookDetailsComponent,
    RegisterFormComponent,
    CartStatusComponent
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
