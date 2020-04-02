import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Supplier } from '../../../models/supplier';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-supplier-edit',
  templateUrl: './supplier-edit.component.html',
  styleUrls: ['./supplier-edit.component.css']
})
export class SupplierEditComponent implements OnInit {
sup: Supplier;
id: any;
  constructor(private route: ActivatedRoute, private router: Router, public authService: AuthService) { }

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
    this.route.params.subscribe((params: any) => {
      this.id = params.id;
      this.authService.supplierbyid(this.id).subscribe((res: any) => {
        console.log('supplier edit', res.supplier[0].suppliername);
        this.sup = {
          suppliername: res.supplier[0].suppliername,
          contactname: res.supplier[0].contactname,
          address: res.supplier[0].address,
          city: res.supplier[0].city,
          postalcode: res.supplier[0].postalcode,
          country: res.supplier[0].country,
          phone: res.supplier[0].phone,
        };

      });
    }, (error) => {
      console.log(error);
    });
  }
  back() {
    this.router.navigate(['./supplier-list']);

  }
 shipperedit() {
    console.log(this.sup);
    this.authService.supplierupdate(this.sup, this.id).subscribe((res: any) => {
      this.router.navigate(['./supplier-list']);
    }, (error) => {
      console.log(error);
    });
  }

}
