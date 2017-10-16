import { Component } from '@angular/core';

@Component ({
   selector: 'my-transforms',
   templateUrl:  '/app/components/10/transforms/transforms.component.html',
})

export class TransformsComponent {
  TutorialName: string = 'Angular 2 tutorial';
  myDate : Date = new Date(2016, 3, 15);
  myNumber: number = 123; 
}
