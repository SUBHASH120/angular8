import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  displayedColumns: any[];
  dataSource: any;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.displayedColumns = ['categoryname', 'description', 'edit', 'delete'];
    this.authService.categorylist().subscribe((res: any) => {
      console.log(res);
      this.dataSource = res.category;
    }, (error) => {
      console.log(error);
    });
  }
  edit(event) {
    console.log(event.id);
    this.router.navigate(['/category-edit', {id: event.id}]);
  }
  delete(event) {
    const r = confirm('Are you sure!');
    if (r === true) {
      this.authService.categorydelete(event.id).subscribe((res: any) => {
        console.log(res);
        location.reload();
      }, (error) => {
        console.log(error);
      });
    } else {}
  }

}
