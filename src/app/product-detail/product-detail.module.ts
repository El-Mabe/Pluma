import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailComponent } from './components/product-detail.component';

import { ProductDetailRoutinModule } from './product-detail-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductDetailRoutinModule,
    SharedModule
  ]
})
export class ProductDetailModule { }
