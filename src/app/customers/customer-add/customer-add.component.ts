import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../models/customer';

import { AuthService } from '../../auth.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  cus: Customer;
  constructor(public authServive: AuthService, private router: Router) { }

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
  customerSubmit() {
    console.log(this.cus);
    this.authServive.customeradd(this.cus).subscribe(res => {
      console.log(res);
      this.router.navigate(['./customer-list']);

    }, (error) => {
      console.log(error);
    });
  }

}
