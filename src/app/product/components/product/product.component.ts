import { Component, Input, Output, EventEmitter} from '@angular/core';

import { Product } from '../../../core/models/product.model';
import { CartService } from './../../../core/services/cart.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent {

    today = new Date();
    constructor(
        private cartService: CartService
    ) {

    }

    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    addCart(){
        console.log('Añadir al carrito');
        this.cartService.addCart(this.product);
        //this.productClicked.emit(this.product.id);
    }
}