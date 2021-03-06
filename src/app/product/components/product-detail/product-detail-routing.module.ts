import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProductDetailComponent } from './components/product-detail.component';


const routes: Routes = [
    {
        path: 'products/:id',
        component: ProductDetailComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports:[
        RouterModule
    ]
})
export class ProductDetailRoutinModule {}