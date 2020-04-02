import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../../../models/employee';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
emp: Employee;
id: any;
  constructor(private route: ActivatedRoute, private router: Router, public authService: AuthService) { }

  ngOnInit() {
    this.emp = {
      lastname: '',
      firstname: '',
      birthdate: '',
      photo: '',
      notes: '',
    };
    this.route.params.subscribe((params: any) => {
      this.id = params.id;
      this.authService.employeebyid(this.id).subscribe((res: any) => {
        console.log('employee edit', res.employee[0].lastname);
        this.emp = {
          lastname: res.employee[0].lastname,
          firstname: res.employee[0].firstname,
          birthdate: res.employee[0].birthdate,
          photo: res.employee[0].photo,
          notes: res.employee[0].notes
        };

      });
    }, (error) => {
      console.log(error);
    });
  }
  back() {
    this.router.navigate(['./employee-list']);

  }
  employeeedit() {
    console.log(this.emp);
    this.authService.employeeupdate(this.emp, this.id).subscribe((res: any) => {
      this.router.navigate(['./employee-list']);
    }, (error) => {
      console.log(error);
    });
  }

}
