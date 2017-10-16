import { Component } from '@angular/core';

@Component ({
   selector: 'my-images',
   templateUrl: '/app/components/5/images/images.component.html',
})
export class ApImages  {
  exampleTitle: string = 'ApImages';
  appStatus: boolean = false;
  appList: any[] = [
    {  "ID": "1",  "Name" : "One", "url": 'http://i64.tinypic.com/2eamloy.jpg'},
    {  "ID": "2",  "Name" : "Two", "url": 'http://i67.tinypic.com/28a11js.jpg'}
  ];
}
