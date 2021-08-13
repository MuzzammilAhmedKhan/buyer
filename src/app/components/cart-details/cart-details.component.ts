import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity:number = 0;
  constructor(private cartService:CartService, private router: Router) { }

  ngOnInit(): void {
    this.listCartDetails();
  }

  listCartDetails() {
    this.cartItems = this.cartService.cartItems;
    this.cartService.totalPrice.subscribe(data =>this.totalPrice = data);
    this.cartService.totalQuantity.subscribe(data=>{this.totalQuantity = data;});
    this.cartService.computeCartTotals();
  }

  //method to increase quantity
  incrementQuantity(cartItem:CartItem){
    //just pass the CartItem again to recalculate the quantity
    this.cartService.addToCart(cartItem);
  }

  //method to decrease the quantity
  decrementQuantity(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem);
  }

  removeItem(cartItem:CartItem){
    this.cartService.remove(cartItem);
  }

  placeOrder(){
    console.log('in placeOrder');
    //TODO save the order and clear cart
    this.router.navigateByUrl("/confirmOrder"); 

  }
  


}
