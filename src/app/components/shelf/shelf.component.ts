import { Component, OnInit, Input, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss']
})
export class ShelfComponent implements OnInit {

  constructor (private httpService: HttpClient) { }
  productsObject: object[];
  products: Array<{id: number, name: string, image: string, price: Array<{amount: number, currency: string, measureUnit: string}>}> = [];
  inCart: Array<{id: number, name: string, image: string, price: number, count: number}> = [];
  counts: number[];
  count: number;
  sum: number;

  toCart(id: number){
    if((this.inCart.filter((obj) => obj.id === id).length) > 0){
      this.inCart.find(x=>x.id == id).count++;
    }else{
      this.inCart.push({id: id, name: this.products[id-1].name, image: this.products[id-1].image, price: this.products[id-1].price["amount"], count: 1});
    }
    this.sum += this.inCart.find(x=>x.id == id).price;
  }

  addCount(id: number){
    this.inCart.find(x=>x.id == id).count++;
    this.sum += this.inCart.find(x=>x.id == id).price;
  }

  remCount(id: number){
    if (this.inCart.find(x=>x.id == id).count <= 1){
      this.sum -= this.inCart.find(x=>x.id == id).price;
      this.inCart.splice(this.inCart.findIndex(x=>x.id == id), 1);
    }else if(this.inCart.find(x=>x.id == id).count > 0){
      this.inCart.find(x=>x.id == id).count--;
      this.sum -= this.inCart.find(x=>x.id == id).price;
    }
    
  }

  remProd(id: number){
    this.sum -= this.inCart.find(x=>x.id == id).price * this.inCart.find(x=>x.id == id).count;
    this.inCart.splice(this.inCart.findIndex(x=>x.id == id), 1);
    if (this.sum < 0){
      this.sum = 0.00;
    }

  }


  ngOnInit() {
    this.sum = 0.00;
    
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
