import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../../models/product';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
pro: Product;
id: any;
  constructor(private route: ActivatedRoute, private router: Router, public authService: AuthService) { }

  ngOnInit() {
    this.pro = {
      productname: '',
      supplierid: '',
      categoryid: '',
      unit: '',
      price : '',
     };
    this.route.params.subscribe((params: any) => {
      this.id = params.id;
      this.authService.productbyid(this.id).subscribe((res: any) => {
        console.log('product edit', res.product[0].productname);
        this.pro = {
          productname: res.product[0].productname,
          supplierid: res.product[0].supplierid,
          categoryid: res.product[0].categoryid,
          unit: res.product[0].unit,
          price: res.product[0].price
        };

      });
    }, (error) => {
      console.log(error);
    });
  }
  back() {
    this.router.navigate(['./product-list']);

  }
 productedit() {
    console.log(this.pro);
    this.authService.productupdate(this.pro, this.id).subscribe((res: any) => {
      this.router.navigate(['./product-list']);
    }, (error) => {
      console.log(error);
    });
  }

}
