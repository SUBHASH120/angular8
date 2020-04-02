import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../../models/supplier';

import { AuthService } from '../../auth.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.css']
})
export class SupplierAddComponent implements OnInit {
  sup: Supplier;
  constructor(public authServive: AuthService, private router: Router) { }

  ngOnInit() {
    this.sup = {
      suppliername: '',
      contactname: '',
      address: '',
      city: '',
      postalcode : '',
      country : '',
      phone : ''
    };
  }
  back() {
    this.router.navigate(['/supplier-list']);

  }
  supplierSubmit() {
    console.log(this.sup);
    this.authServive.supplieradd(this.sup).subscribe(res => {
      console.log(res);
      this.router.navigate(['./supplier-list']);

    }, (error) => {
      console.log(error);
    });
  }

}
