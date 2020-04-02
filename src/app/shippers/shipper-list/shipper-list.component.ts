import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shipper-list',
  templateUrl: './shipper-list.component.html',
  styleUrls: ['./shipper-list.component.css']
})
export class ShipperListComponent implements OnInit {
  displayedColumns: any[];
  dataSource: any;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.displayedColumns = ['shippername', 'phone', 'edit', 'delete'];
    this.authService.shipperlist().subscribe((res: any) => {
      console.log(res);
      this.dataSource = res.shipper;
    }, (error) => {
      console.log(error);
    });
  }
  edit(event) {
    this.router.navigate(['/shipper-edit', {id: event.id}]);
  }
  delete(event) {
    const r = confirm('Are you sure!');
    if (r === true) {
      this.authService.shipperdelete(event.id).subscribe((res: any) => {
        console.log(res);
        location.reload();
      }, (error) => {
        console.log(error);
      });
    } else {}
  }

}
