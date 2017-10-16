import { Component } from '@angular/core';

@Component ({
   selector: 'my-app',
   templateUrl:  '/app/components/9/event-handler/event-handler.component.html',
})

export class HaventHandlerComponent {
   status: boolean = true;
   clicked(event) {
      status = !this.status;
   }
}
