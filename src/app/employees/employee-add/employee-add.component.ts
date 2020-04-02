import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee';

import { AuthService } from '../../auth.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  emp: Employee;
  constructor(public authServive: AuthService, private router: Router) { }

  ngOnInit() {
    this.emp = {
      lastname: '',
      firstname: '',
      birthdate: '',
      photo: '',
      notes: '',
    };
  }
  back() {
    this.router.navigate(['./employee-list']);

  }
  employeeSubmit() {
    console.log(this.emp);
    this.authServive.employeeadd(this.emp).subscribe(res => {
      console.log(res);
      this.router.navigate(['./employee-list']);

    }, (error) => {
      console.log(error);
    });
  }

}
