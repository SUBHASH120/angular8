import { Component, OnInit } from '@angular/core';
import { Category } from '../../../models/category';

import { AuthService } from '../../auth.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  cat: Category;
  constructor(public authServive: AuthService, private router: Router) { }

  ngOnInit() {
    this.cat = {
      categoryname: '',
      description: ''
    };
  }
  back() {
    this.router.navigate(['./category-list']);

  }
  categorySubmit() {
    console.log(this.cat);
    this.authServive.categoryadd(this.cat).subscribe(res => {
      console.log(res);
      this.router.navigate(['./category-list']);

    }, (error) => {
      console.log(error);
    });
  }

}
