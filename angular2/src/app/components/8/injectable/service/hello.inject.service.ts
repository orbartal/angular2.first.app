import { Injectable } from '@angular/core';


@Injectable()
export class helloInjectService {
   getHello(): string {
      return "Hello world from service";
   }
}
