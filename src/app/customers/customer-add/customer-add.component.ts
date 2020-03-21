import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../models/customer';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  cus: Customer;
  constructor() { }

  ngOnInit() {
    this.cus = {
      customername: '',
      contactname: '',
      address: '',
      city: '',
      postalcode: '',
      country: '',
    };
  }
  back() {

  }
  customerSubmit() {}

}
