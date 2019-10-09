import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { }

  

  ngOnInit() {
    class inCart{
      count: number;
      product: string;
      price: number;
    }
    
    var products: Array<inCart>;

  }

}
