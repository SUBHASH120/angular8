import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {
  displayedColumns: any[];
  dataSource: any;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.displayedColumns = ['suppliername',	'contactname', 	'address',	'city',	'postalcode',	'country', 'phone', 'edit', 'delete'];
    this.authService.supplierlist().subscribe((res: any) => {
      console.log(res);
      this.dataSource = res.supplier;
    }, (error) => {
      console.log(error);
    });
  }
  edit(event) {
    this.router.navigate(['/supplier-edit', {id: event.id}]);
  }
  delete(event) {
    const r = confirm('Are you sure!');
    if (r === true) {
      this.authService.supplierdelete(event.id).subscribe((res: any) => {
        console.log(res);
        location.reload();
      }, (error) => {
        console.log(error);
      });
    } else {}
  }

}
