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



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'listing', component: ListingComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'update', component: UpdateComponent},
  {path: 'update', component: UpdateComponent},
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'customer-add', component: CustomerAddComponent},
  {path: 'customer-edit', component: CustomerEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
