import { Component } from '@angular/core';

@Component ({
   selector: 'my-click-event-handler',
   templateUrl:  '/app/components/9/event-handler/event-handler.component.html',
})

export class HaventHandlerComponent {
   bStatus: boolean = true;
   clicked(event) {
        this.bStatus = !this.bStatus;
   }
}
