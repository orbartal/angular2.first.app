import { Component } from '@angular/core';
//import { appService } from './app.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ProductI } from './../product/product';
import { ProductServiceC } from './../service/products.service';

@Component ({
   selector: 'my-crud',
   providers: [ProductServiceC],
   templateUrl: '/app/components/6/products/crud/crud.component.html',
})

export class AppProductsCrud  {
  iproducts: ProductI[];
  constructor(private _product: ProductServiceC) {
  }

  ngOnInit() : void {
     this._product.getproducts()
     .subscribe(iproducts => this.iproducts = iproducts);
  }
}
