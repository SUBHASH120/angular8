import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from '../../../models/order';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {
ord: Order;
id: any;
  constructor(private route: ActivatedRoute, private router: Router, public authService: AuthService) { }

  ngOnInit() {
    this.ord = {
      customerid: '',
      employeeid: '',
      orderdate: '',
      shipperid: '',
    };
    this.route.params.subscribe((params: any) => {
      this.id = params.id;
      this.authService.orderbyid(this.id).subscribe((res: any) => {
        console.log('order edit', res.order[0].customerid);
        this.ord = {
          customerid: res.order[0].customerid,
          employeeid: res.order[0].employeeid,
          orderdate: res.order[0].orderdate,
          shipperid: res.order[0].shipperid,
        };

      });
    }, (error) => {
      console.log(error);
    });
  }
  back() {
    this.router.navigate(['./order-list']);

  }
 orderedit() {
    console.log(this.ord);
    this.authService.orderupdate(this.ord, this.id).subscribe((res: any) => {
      this.router.navigate(['./order-list']);
    }, (error) => {
      console.log(error);
    });
  }

}
