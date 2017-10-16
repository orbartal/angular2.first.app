import { Component } from '@angular/core';

@Component ({
   selector: 'my-if-for',
   templateUrl: '/app/components/4/if-for/if-for.component.html',
})
export class ApIfFor  {
  exampleTitle: string = 'IfFor';
  appStatus: boolean = false;
  appList: any[] = [
    {  "ID": "1",  "Name" : "One"},
    {  "ID": "2",  "Name" : "Two" }
  ];
}
