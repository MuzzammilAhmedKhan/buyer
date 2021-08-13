import { Book } from "./book";


export class CartItem {
    bookId:number;
    name:string;
    bookImage:string;
    unitPrice:number;
    quantity:number

    constructor(book:Book){
        this.bookId = book.bookId;
        this.name = book.bookName;
        this.unitPrice = book.unitPrice;
        this.bookImage = book.bookImage;
        this.quantity = 1;
    }
}
