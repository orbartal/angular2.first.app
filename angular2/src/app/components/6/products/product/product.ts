export interface ProductI {
   id: number;
   name: string;
}

export class ProductC {
   constructor (
      public id: number,
      public name: string
   ) {  }
}
