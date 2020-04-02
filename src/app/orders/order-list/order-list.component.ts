import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  displayedColumns: any[];
  dataSource: any;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.displayedColumns = ['customerid',	'employeeid',	'orderdate',	'shipperid', 'edit', 'delete'];
    this.authService.orderlist().subscribe((res: any) => {
      console.log(res);
      this.dataSource = res.order;
    }, (error) => {
      console.log(error);
    });
  }
  edit(event) {
    this.router.navigate(['/order-edit', {id: event.id}]);
  }
  delete(event) {
    const r = confirm('Are you sure!');
    if (r === true) {
      this.authService.orderdelete(event.id).subscribe((res: any) => {
        console.log(res);
        location.reload();
      }, (error) => {
        console.log(error);
      });
    } else {}
  }

}
