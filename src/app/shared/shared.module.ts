import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './../material/material.module';
import { OrderProductsPipe } from './pipes/order-products.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    OrderProductsPipe
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    OrderProductsPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
