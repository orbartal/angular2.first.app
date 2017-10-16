import { Component } from '@angular/core';
import { ProductC } from './../product/product';

@Component ({
   selector: 'product-form',
   templateUrl: '/app/components/6/products/form/product-form.component.html',
//   './product-form.component.html'
  //template: '<h1>form</h1>',
})

export class ProductFormComponent {
   exampleTitle: string = 'Form';
   product = new ProductC(1,'ProductA');
}
