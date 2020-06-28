import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../../../../core/services/products/products.service';
import { Product } from '../../../../core/models/product.model';
import { title } from 'process';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      // this.product = this.productsService.getProduct(id);
      // console.log(product);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id).subscribe((product) => {
      this.product = product;
      // console.log(product);
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '3',
      title: 'hoodie',
      image: 'assets/images/mug.png',
      price: 80000,
      description: 'bla bla bla bla bla',
    };
    this.productsService.createProduct(newProduct).subscribe((product) => {
      console.log(product);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      id: '3',
      title: 'hoodie',
      image: 'assets/images/hoodie.png',
      price: 80000,
      description: 'bla bla bla bla bla',
    };
    this.productsService.updateProduct('2', updateProduct)
    .subscribe((product) => {
      console.log(product);
    });
  }
  delateProduct() {
    this.productsService.delateProduct('222')
    .subscribe(rta => {
      console.log(rta);
    });
  }
}
