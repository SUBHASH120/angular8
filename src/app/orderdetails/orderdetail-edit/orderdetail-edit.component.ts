import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Orderdetail } from '../../../models/orderdetail';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-orderdetail-edit',
  templateUrl: './orderdetail-edit.component.html',
  styleUrls: ['./orderdetail-edit.component.css']
})
export class OrderdetailEditComponent implements OnInit {
ordd: Orderdetail;
id: any;
  constructor(private route: ActivatedRoute, private router: Router, public authService: AuthService) { }

  ngOnInit() {
    this.ordd = {
      orderid: '',
      productid: '',
      quantity: '',
    };
    this.route.params.subscribe((params: any) => {
      this.id = params.id;
      this.authService.orderdetailbyid(this.id).subscribe((res: any) => {
        console.log('order edit', res.orderdetail[0].orderid);
        this.ordd = {
          orderid: res.orderdetail[0].orderid,
          productid: res.orderdetail[0].productid,
          quantity: res.orderdetail[0].quantity,
        };

      });
    }, (error) => {
      console.log(error);
    });
  }
  back() {
    this.router.navigate(['./orderdetail-list']);

  }
 orderdetailedit() {
    console.log(this.ordd);
    this.authService.orderdetailupdate(this.ordd, this.id).subscribe((res: any) => {
      this.router.navigate(['./orderdetail-list']);
    }, (error) => {
      console.log(error);
    });
  }

}
