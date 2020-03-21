import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  displayedColumns: any[];
  dataSource: any;
  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.displayedColumns = ['firstname', 'lastname', 'email', 'mobile', 'address', 'edit', 'delete'];
    this.auth.listing().subscribe((res: any) => {
      console.log(res);
      this.dataSource = res.users;
    }, (error) => {
      console.log(error);
    });
  }
  edit(event) {
    this.router.navigate(['/update', {id: event.id}]);
  }
  delete(event) {
    const r = confirm('Are you sure!');
    if (r === true) {
      this.auth.delete(event.id).subscribe((res: any) => {
        console.log(res);
        location.reload();
      }, (error) => {
        console.log(error);
      });
    } else {}
  }
  add() {
    this.router.navigate(['/register']);
  }
  logout() {
    this.router.navigate(['/']);
  }

}
