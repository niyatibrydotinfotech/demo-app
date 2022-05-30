import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPassForm = new FormGroup({
    user_email: new FormControl("", [Validators.required, Validators.email])
  });

  submitted = false;
  mailSent = false;

  constructor(
    private router: Router,
    private globalService: GlobalService,
    private apiService: ApiService
    ) { }

  ngOnInit() {
  }

  submitForgotPassForm() {
    this.submitted = true;
    console.log("submitForgotPassForm called.");
    if(this.forgotPassForm.valid) {
      let params = {user_email:""};
      params.user_email = (typeof this.forgotPassForm.value.user_email != 'undefined') ? this.forgotPassForm.value.user_email : "";
      this.mailSent = true;
      setTimeout(() => {
        this.mailSent = false;
      }, 5000);
      // this.apiService.authenticateUser(params).subscribe((data:any) => {
      //   if(1==1) {
      //     this.mailSent = true;
      //     this.router.navigate([this.globalService.routeData.dashboard]);
      //   }
      // }, (err) => {
      //   console.log(err);
      // });
    }
  }

  get userEmail() {
    return this.forgotPassForm.get("user_email");
  }

}
