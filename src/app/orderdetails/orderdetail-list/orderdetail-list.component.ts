import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orderdetail-list',
  templateUrl: './orderdetail-list.component.html',
  styleUrls: ['./orderdetail-list.component.css']
})
export class OrderdetailListComponent implements OnInit {
  displayedColumns: any[];
  dataSource: any;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.displayedColumns = ['orderid',	'productid',	'quantity', 'edit', 'delete'];
    this.authService.orderdetaillist().subscribe((res: any) => {
      console.log(res);
      this.dataSource = res.orderdetail;
    }, (error) => {
      console.log(error);
    });
  }
  edit(event) {
    this.router.navigate(['/orderdetail-edit', {id: event.id}]);
  }
  delete(event) {
    const r = confirm('Are you sure!');
    if (r === true) {
      this.authService.orderdetaildelete(event.id).subscribe((res: any) => {
        console.log(res);
        location.reload();
      }, (error) => {
        console.log(error);
      });
    } else {}
  }

}
