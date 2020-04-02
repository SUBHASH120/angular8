import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';

import { AuthService } from '../../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

// 'productname',	'supplierid',	'categoryid',	'unit',	'price',
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  pro: Product;
  constructor(public authServive: AuthService, private router: Router) { }

  ngOnInit() {
    this.pro = {
      productname: '',
      supplierid: '',
      categoryid: '',
      unit: '',
      price : '',
     };
  }
  back() {
    this.router.navigate(['/product-list']);

  }
  productSubmit() {
    console.log(this.pro);
    this.authServive.productadd(this.pro).subscribe(res => {
      console.log(res);
      this.router.navigate(['./product-list']);

    }, (error) => {
      console.log(error);
    });
  }

}
