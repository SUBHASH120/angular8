import { Component, OnInit } from '@angular/core';
import { ILogin } from '../../models/register';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   log: ILogin;
  constructor(private router: Router, public auth: AuthService) { }

  ngOnInit() {
    this.log = {
      email: '',
      password: ''
    };
  }
  loginsubmit() {
    this.auth.login(this.log).subscribe((res: any) => {
      if (res.error === false) {
        this.router.navigate(['/listing']);

      } else {
        alert('Invalid username password');
      }
    }, (error) => {
    });
  }
  register() {
    this.router.navigate(['/register']);
  }

}
