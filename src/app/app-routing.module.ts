import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ListingComponent } from './listing/listing.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
// customers
import { CustomerAddComponent } from './customers/customer-add/customer-add.component';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';

// employee

import { EmployeeAddComponent } from './employees/employee-add/employee-add.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

// category

import { CategoryAddComponent } from './categories/category-add/category-add.component';
import { CategoryEditComponent } from './categories/category-edit/category-edit.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';


// shipper

import { ShipperAddComponent } from './shippers/shipper-add/shipper-add.component';
import { ShipperEditComponent } from './shippers/shipper-edit/shipper-edit.component';
import { ShipperListComponent } from './shippers/shipper-list/shipper-list.component';

// supplier
import { SupplierAddComponent } from './suppliers/supplier-add/supplier-add.component';
import { SupplierEditComponent } from './suppliers/supplier-edit/supplier-edit.component';
import { SupplierListComponent } from './suppliers/supplier-list/supplier-list.component';

// product
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductListComponent } from './products/product-list/product-list.component';


// order


import { OrderAddComponent } from './orders/order-add/order-add.component';
import { OrderEditComponent } from './orders/order-edit/order-edit.component';
import { OrderListComponent } from './orders/order-list/order-list.component';


import { OrderdetailAddComponent } from './orderdetails/orderdetail-add/orderdetail-add.component';
import { OrderdetailEditComponent } from './orderdetails/orderdetail-edit/orderdetail-edit.component';
import { OrderdetailListComponent } from './orderdetails/orderdetail-list/orderdetail-list.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'listing', component: ListingComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'update', component: UpdateComponent},
  {path: 'update', component: UpdateComponent},
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'customer-add', component: CustomerAddComponent},
  {path: 'customer-edit', component: CustomerEditComponent},
  {path: 'employee-list', component: EmployeeListComponent},
  {path: 'employee-add', component: EmployeeAddComponent},
  {path: 'employee-edit', component: EmployeeEditComponent},
  {path: 'category-list', component: CategoryListComponent},
  {path: 'category-add', component: CategoryAddComponent},
  {path: 'category-edit', component: CategoryEditComponent},

  {path: 'shipper-list', component: ShipperListComponent},
  {path: 'shipper-add', component:  ShipperAddComponent},
  {path: 'shipper-edit', component: ShipperEditComponent},

  {path: 'supplier-list', component: SupplierListComponent},
  {path: 'supplier-add', component:  SupplierAddComponent},
  {path: 'supplier-edit', component: SupplierEditComponent},

  {path: 'product-list', component: ProductListComponent},
  {path: 'product-add', component:  ProductAddComponent},
  {path: 'product-edit', component: ProductEditComponent},

  {path: 'order-list', component: OrderListComponent},
  {path: 'order-add', component:  OrderAddComponent},
  {path: 'order-edit', component: OrderEditComponent},

  {path: 'orderdetail-list', component: OrderdetailListComponent},
  {path: 'orderdetail-add', component:  OrderdetailAddComponent},
  {path: 'orderdetail-edit', component: OrderdetailEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
