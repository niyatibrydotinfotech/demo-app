import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { ApiService } from 'src/app/shared/services/api.service';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  constructor(
    private globalService: GlobalService,
    private apiService: ApiService,
    private router: Router,
    private notifier: NotifierService
    ) {}

  ngOnInit() { }

  onSubmitSignup(formdata:any) {
    this.apiService.createUser(formdata.value).subscribe((data:any) => {
      console.log("data==>", data);
      if(typeof data.success != 'undefined' && data.success == true) {
        this.notifier.notify("success", data.message);
        this.router.navigate([this.globalService.routeData.auth]);
      }
    }, (err) => {
      console.log(err);
    });
  }
  

}
