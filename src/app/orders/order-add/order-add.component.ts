import { Component, OnInit } from '@angular/core';
import { Order } from '../../../models/order';

import { AuthService } from '../../auth.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {
  ord: Order;
  constructor(public authServive: AuthService, private router: Router) { }

  ngOnInit() {
    this.ord = {
      customerid: '',
      employeeid: '',
      orderdate: '',
      shipperid: '',
    };
  }
  back() {
    this.router.navigate(['/order-list']);

  }
  orderSubmit() {
    console.log(this.ord);
    this.authServive.orderadd(this.ord).subscribe(res => {
      console.log(res);
      this.router.navigate(['./order-list']);

    }, (error) => {
      console.log(error);
    });
  }

}
