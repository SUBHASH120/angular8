import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Update } from '../../models/register';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
id: any;
upd: Update;
  constructor(private route: ActivatedRoute, private router: Router, public auth: AuthService) { }

  ngOnInit() {
    this.upd = {
      firstname: '',
      lastname: '',
      email: '',
      mobile: '',
      address: ''
    };
    this.route.params.subscribe((params: any) => {
      this.id = params.id;
      this.auth.listingbyid(this.id).subscribe((res: any) => {
        console.log('update', res.users[0].firstname);
        this.upd = {
          firstname: res.users[0].firstname,
          lastname: res.users[0].lastname,
          email: res.users[0].email,
          mobile: res.users[0].mobile,
          address: res.users[0].address
        };

      });
    }, (error) => {
      console.log(error);
    });
  }

  updatedata() {
    this.auth.update(this.upd, this.id).subscribe((res: any) => {
        console.log(res);
        if (res.error === false) {
          this.router.navigate(['/listing']);
        }
    }, (error) => {
      console.log(error);
    });

  }
  back() {
    this.router.navigate(['/listing']);
  }

}
