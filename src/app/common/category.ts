export class Category {
    categoryId:number;
    categoryName : string;

    constructor(categoryName : string, categoryId : number){
        this.categoryName = categoryName;
        this.categoryId = categoryId;
    }
}
