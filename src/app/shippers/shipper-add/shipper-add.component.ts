import { Component, OnInit } from '@angular/core';
import { Shipper } from '../../../models/shipper';

import { AuthService } from '../../auth.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-shipper-add',
  templateUrl: './shipper-add.component.html',
  styleUrls: ['./shipper-add.component.css']
})
export class ShipperAddComponent implements OnInit {
  shi: Shipper;
  constructor(public authServive: AuthService, private router: Router) { }

  ngOnInit() {
    this.shi = {
      shippername: '',
      phone: '',
    };
  }
  back() {
    this.router.navigate(['/shipper-list']);

  }
  shipperSubmit() {
    console.log(this.shi);
    this.authServive.shipperadd(this.shi).subscribe(res => {
      console.log(res);
      this.router.navigate(['./shipper-list']);

    }, (error) => {
      console.log(error);
    });
  }

}
