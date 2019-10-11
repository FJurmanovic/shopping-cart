import { Component, OnInit, Input, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss']
})
export class ShelfComponent implements OnInit {

  @Input() sideBar: CartComponent;

  constructor (private httpService: HttpClient) { }
  productsObject: object[];
  products: Array<{id: number, name: string, image: string, price: Array<{amount: number, currency: string, measureUnit: string}>}> = [];
  inCart: Array<{id: number, name: string, image: string, price: number, count: number}> = [];
  counts: number[];
  count: number;

  toCart(id: number){
    if((this.inCart.filter((obj) => obj.id === id).length) > 0){
      this.inCart.find(x=>x.id == id).count++;
    }else{
      this.inCart.push({id: id, name: this.products[id-1].name, image: this.products[id-1].image, price: this.products[id-1].price["amount"], count: 1});
    }

    
    console.log(this.inCart);
  }

  addCount(id: number){
    this.inCart.find(x=>x.id == id).count++;
  }

  remCount(id: number){
    if (this.inCart.find(x=>x.id == id).count <= 1){
      this.inCart.splice(this.inCart.findIndex(x=>x.id == id), 1);
    }else if(this.inCart.find(x=>x.id == id).count > 0){
      this.inCart.find(x=>x.id == id).count--;
    }
  }

  remProd(id: number){
    this.inCart.splice(this.inCart.findIndex(x=>x.id == id), 1);

  }

  ngOnInit() {
    this.httpService.get('./assets/products.json').subscribe(
      data => {
        this.productsObject = data as object [];	 
        console.log (this.productsObject);
        this.products = this.productsObject["products"];
        console.log (this.products);
        

      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
