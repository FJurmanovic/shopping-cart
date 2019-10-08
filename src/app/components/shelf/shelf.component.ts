import { Component, OnInit } from '@angular/core';
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
  products: string[];
        

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
