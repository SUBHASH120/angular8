import { Component, OnInit } from '@angular/core';
import { Orderdetail } from '../../../models/orderdetail';

import { AuthService } from '../../auth.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-orderdetail-add',
  templateUrl: './orderdetail-add.component.html',
  styleUrls: ['./orderdetail-add.component.css']
})
export class OrderdetailAddComponent implements OnInit {
  ordd: Orderdetail;
  constructor(public authServive: AuthService, private router: Router) { }

  ngOnInit() {
    this.ordd = {
      orderid: '',
      productid: '',
      quantity: '',
    };
  }
  back() {
    this.router.navigate(['/orderdetail-list']);

  }
  orderdetailSubmit() {
    console.log(this.ordd);
    this.authServive.orderdetailadd(this.ordd).subscribe(res => {
      console.log(res);
      this.router.navigate(['./orderdetail-list']);

    }, (error) => {
      console.log(error);
    });
  }

}
