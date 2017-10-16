import { Component } from '@angular/core';

@Component ({
   selector: 'my-variables',
   template: '<h1>{{exampleTitle}}</h1><p>{{exampleText}}</p><p>fix text</p>',
})
export class AppVariables  {
  exampleTitle: string = 'Variables';
  exampleText: string = 'bla bla bla';
}
