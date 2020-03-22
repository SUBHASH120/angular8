import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from '../../../models/customer';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
cus: Customer;
id: any;
  constructor(private route: ActivatedRoute, private router: Router, public authService: AuthService) { }

  ngOnInit() {
    this.cus = {
      customername: '',
      contactname: '',
      address: '',
      city: '',
      postalcode: '',
      country: '',
    };
    this.route.params.subscribe((params: any) => {
      this.id = params.id;
      this.authService.customerbyid(this.id).subscribe((res: any) => {
        console.log('customer edit', res.customer[0].customername);
        this.cus = {
          customername: res.customer[0].customername,
          contactname: res.customer[0].contactname,
          address: res.customer[0].address,
          city: res.customer[0].city,
          postalcode: res.customer[0].postalcode,
          country: res.customer[0].country
        };

      });
    }, (error) => {
      console.log(error);
    });
  }
  back() {
    this.router.navigate(['./customer-list']);

  }
  customerSubmit() {
  }

}
