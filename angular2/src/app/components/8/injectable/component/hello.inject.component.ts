import { Component } from '@angular/core';
import {  helloInjectService } from './../service/hello.inject.service';

@Component({
   selector: 'my-inject-hello',
   template: '<div>{{value}}</div>',
   providers: [helloInjectService]
})

export class HelloInjectComponent {
   value: string = "";
   constructor(private _helloService: helloInjectService) { }
   ngOnInit(): void {
      this.value = this._helloService.getHello();
   }
}
