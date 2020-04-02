import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from '../../../models/category';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
cat: Category;
id: any;
  constructor(private route: ActivatedRoute, private router: Router, public authService: AuthService) { }

  ngOnInit() {
    this.cat = {
     categoryname: '',
     description: ''
    };
    this.route.params.subscribe((params: any) => {
      this.id = params.id;
      this.authService.categorybyid(this.id).subscribe((res: any) => {
        console.log('Category edit', res.category[0].categoryname);
        this.cat = {
          categoryname: res.category[0].categoryname,
          description: res.category[0].description,
        };

      });
    }, (error) => {
      console.log(error);
    });
  }
  back() {
    this.router.navigate(['./category-list']);

  }
  categoryedit() {
    console.log(this.cat);
    this.authService.categoryupdate(this.cat, this.id).subscribe((res: any) => {
      this.router.navigate(['./category-list']);
    }, (error) => {
      console.log(error);
    });
  }

}
