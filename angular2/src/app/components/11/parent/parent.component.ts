import { Component } from '@angular/core';
//import { ChildComponent } from './../child/child.component';

@Component ({
   selector: 'my-app',
   template: '<h1>Parent Child</h1><div> {{values}} </div><child-app></child-app> '
})

export class ParentComponent {
  values = '';
  ngOnInit() {
     this.values = "Hello from parent";
  }
}
