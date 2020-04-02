import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListingComponent } from './listing/listing.component';
import {MatToolbarModule} from '@angular/material/toolbar';


import { AuthService } from './auth.service';


import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { CustomerAddComponent } from './customers/customer-add/customer-add.component';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { EmployeeAddComponent } from './employees/employee-add/employee-add.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

import { CategoryAddComponent } from './categories/category-add/category-add.component';
import { CategoryEditComponent } from './categories/category-edit/category-edit.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';

import { ShipperAddComponent } from './shippers/shipper-add/shipper-add.component';
import { ShipperEditComponent } from './shippers/shipper-edit/shipper-edit.component';
import { ShipperListComponent } from './shippers/shipper-list/shipper-list.component';

import { SupplierAddComponent } from './suppliers/supplier-add/supplier-add.component';
import { SupplierEditComponent } from './suppliers/supplier-edit/supplier-edit.component';
import { SupplierListComponent } from './suppliers/supplier-list/supplier-list.component';

import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductListComponent } from './products/product-list/product-list.component';


import { OrderAddComponent } from './orders/order-add/order-add.component';
import { OrderEditComponent } from './orders/order-edit/order-edit.component';
import { OrderListComponent } from './orders/order-list/order-list.component';


import { OrderdetailAddComponent } from './orderdetails/orderdetail-add/orderdetail-add.component';
import { OrderdetailEditComponent } from './orderdetails/orderdetail-edit/orderdetail-edit.component';
import { OrderdetailListComponent } from './orderdetails/orderdetail-list/orderdetail-list.component';


import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ListingComponent,
    UpdateComponent,
    LoginComponent,

    CustomerAddComponent,
    CustomerEditComponent,
    CustomerListComponent,

    HeaderComponent,

    EmployeeAddComponent,
    EmployeeEditComponent,
    EmployeeListComponent,

    CategoryAddComponent,
    CategoryEditComponent,
    CategoryListComponent,

    ShipperAddComponent,
    ShipperEditComponent,
    ShipperListComponent,

    SupplierAddComponent,
    SupplierEditComponent,
    SupplierListComponent,

    ProductAddComponent,
    ProductEditComponent,
    ProductListComponent,

    OrderAddComponent,
    OrderEditComponent,
    OrderListComponent,

    OrderdetailAddComponent,
    OrderdetailEditComponent,
    OrderdetailListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
