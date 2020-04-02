import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Shipper } from '../../../models/shipper';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-shipper-edit',
  templateUrl: './shipper-edit.component.html',
  styleUrls: ['./shipper-edit.component.css']
})
export class ShipperEditComponent implements OnInit {
shi: Shipper;
id: any;
  constructor(private route: ActivatedRoute, private router: Router, public authService: AuthService) { }

  ngOnInit() {
    this.shi = {
      shippername: '',
      phone: '',
    };
    this.route.params.subscribe((params: any) => {
      this.id = params.id;
      this.authService.shipperbyid(this.id).subscribe((res: any) => {
        console.log('shipper edit', res.shipper[0].shippername);
        this.shi = {
          shippername: res.shipper[0].shippername,
          phone: res.shipper[0].phone,
        };

      });
    }, (error) => {
      console.log(error);
    });
  }
  back() {
    this.router.navigate(['./shipper-list']);

  }
 shipperedit() {
    console.log(this.shi);
    this.authService.shipperupdate(this.shi, this.id).subscribe((res: any) => {
      this.router.navigate(['./shipper-list']);
    }, (error) => {
      console.log(error);
    });
  }

}
