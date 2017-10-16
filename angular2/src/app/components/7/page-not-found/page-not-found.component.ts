import { Component } from '@angular/core';
import { Router }  from '@angular/router';

@Component ({
   selector: 'my-page-not-found',
   template: 'Page Not Found 2: <a class = "button" (click) = "onBack()">Back to home</a>',
})
export class PageNotFoundComponent {
  constructor(private _router: Router){}

   onBack(): void {
      this._router.navigate(['/1Hello']);
   }
}
