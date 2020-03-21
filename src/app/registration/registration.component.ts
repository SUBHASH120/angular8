import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/register';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
   reg: Register ;
  constructor(public auth: AuthService, private router: Router) {
    this.reg = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      mobile: '',
      address: ''
    };
   }

  ngOnInit() { }
  registerSubmit() {
    console.log(this.reg);
    this.auth.register(this.reg).subscribe((res: any) => {
      console.log(res);
      if (res.error === false) {
        this.router.navigate(['/']);
      } else if (res.error === true) {
        if (res.messages.firstname[0]) {
          alert(res.messages.firstname[0]);
        }
        if (res.messages.lastname[0]) {
          alert(res.messages.lastname[0]);
        }
        if (res.messages.email[0]) {
          alert(res.messages.email[0]);
        }
        if (res.messages.password[0]) {
          alert(res.messages.password[0]);
        }
        if (res.messages.mobile[0]) {
          alert(res.messages.mobile[0]);
        }
        if (res.messages.address[0]) {
          alert(res.messages.address[0]);
        }
      }
    });
    }
    login() {
      this.router.navigate(['/']);
    }

}
