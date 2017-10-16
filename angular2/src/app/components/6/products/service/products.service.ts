import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { ProductI } from './../product/product';


@Injectable()
export class ProductServiceC {

   private _producturl = '/app/components/6/products/ado/products.json';
   constructor(private _http: Http){}

   getproducts(): Observable<ProductI[]> {
      return this._http.get(this._producturl)
      .map((response: Response) => <ProductI[]> response.json())
      .do(data => console.log(JSON.stringify(data)));
    //  .catch(this.handleError);
   }

   private handleError(error: Response) {
      console.error(error);
      return Observable.throw(error.json().error());
   }

}
