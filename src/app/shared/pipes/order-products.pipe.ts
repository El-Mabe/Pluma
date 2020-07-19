import { Pipe, PipeTransform } from '@angular/core';

import { Product } from './../../core/models/product.model';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'orderProducts',
})
export class OrderProductsPipe implements PipeTransform {
  product: Product;
  sameProducts: any[] = [];

  transform(products: Product[]): any {
    let unique: any[] = [];
    products.forEach((p) => {
      if (this.sameProducts.length === 0) {
        this.sameProducts.push(Object.assign(p, { quantity: 1, amount: 1 }));
      } else {
        const index = this.sameProducts.findIndex((pro) => pro.id === p.id);
        if (index === -1) {

          this.sameProducts.push(
            Object.assign(p, { quantity: 1, amount: p.price })
          );
        } else {
          this.sameProducts[index].quantity++;
          this.sameProducts[index].amount =
            this.sameProducts[index].quantity * this.sameProducts[index].price;
        }
      }
    });
    //console.log('same products' + unique);
    /*
    unique = this.sameProducts.map((p: []) => {
      let distintos = [...new Set(p)];
    });
    */
    //console.log('Values: ' + Object.values(this.sameProducts).);

    return this.sameProducts;
    //return unique;
  }
}
