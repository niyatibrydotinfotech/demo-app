import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';
import { ApiService } from 'src/app/shared/services/api.service';
import * as myGlobals from "../../../globals";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  // reactive Form example
  loginForm = new FormGroup({
    user_email : new FormControl('', [Validators.required, Validators.email]),
    user_password : new FormControl('', [Validators.required])
  });

  submitted = false;
  myglobals = {};
  

  constructor(
    private globalService: GlobalService,
    private apiService: ApiService,
    private router: Router
    ) { 
      if(this.globalService.isAuthentication()) {
        this.router.navigate([this.globalService.routeData.dashboard]);
      }
    }

  ngOnInit() {
    this.myglobals = myGlobals;   
    console.log('User Token : ', this.globalService.userToken);
  }

  submitLoginForm() {
    this.submitted = true;
    if(this.loginForm.valid) {
      let params = {username:"", password: ""};
      params.username = (typeof this.loginForm.value.user_email != 'undefined') ? this.loginForm.value.user_email : "";
      params.password = (typeof this.loginForm.value.user_password != 'undefined') ? this.loginForm.value.user_password : "";
      this.apiService.authenticateUser(params).subscribe((data:any) => {
        if(typeof data.token != 'undefined' && data.token != '') {
          localStorage.setItem('dt_user_token', data.token);
          this.router.navigate([this.globalService.routeData.dashboard]);
        }
      }, (err) => {
        console.log(err);
      });
    }
  }

  get user() {
    return this.loginForm.get("user_email");
  }
  get password() {
    return this.loginForm.get("user_password");
  }

}
