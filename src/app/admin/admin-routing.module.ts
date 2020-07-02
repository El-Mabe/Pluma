import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductFormComponent } from './components/product-form/product-form.component'
import { NavComponent } from './components/nav/nav.component';
import { TableComponent } from './components/table/table.component';
import { DashComponent } from './components/dash/dash.component';
import { ProducsListComponent } from './components/producs-list/producs-list.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

const routes: Routes = [

  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent
      },
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'dash',
        component: DashComponent
      },
      {
        path: 'products',
        component: ProducsListComponent
      },
      {
        path: 'products/create',
        component: FormProductComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'products/edit/:id',
        component: ProductEditComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
