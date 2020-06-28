import { Component, OnInit } from '@angular/core';

import { ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-producs-list',
  templateUrl: './producs-list.component.html',
  styleUrls: ['./producs-list.component.scss']
})
export class ProducsListComponent implements OnInit {

  products = [];

  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    });
  }

  delateProduct(id: string){
    this.productsService.delateProduct(id)
    .subscribe(rta => {
      console.log(rta);
      if (rta) {
        this.products = this.products.filter(prd =>
          prd.id !== id);
      }
      else{
        alert('Error al eliminar el producto');
      }
    });
  }

}
