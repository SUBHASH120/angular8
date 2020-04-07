import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  displayedColumns: any[];
  dataSource: any;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.displayedColumns = ['customername', 'contactname', 'address', 'city', 'postalcode', 'country', 'edit', 'delete'];
    this.authService.customerlist().subscribe((res: any) => {
      this.dataSource = res.customer;
    }, (error) => {
      console.log(error);
    });
  }
  edit(event) {
    this.router.navigate(['/customer-edit', {id: event.id}]);
  }
  delete(event) {
    const r = confirm('Are you sure!');
    if (r === true) {
      this.authService.customerdelete(event.id).subscribe((res: any) => {
        console.log(res);
        location.reload();
      }, (error) => {
        console.log(error);
      });
    } else {}
  }

}
