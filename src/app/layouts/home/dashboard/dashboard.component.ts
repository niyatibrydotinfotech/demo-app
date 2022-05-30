import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardData:any = [];
  isDropDownClick:boolean = false;
  perPage:number = 10;
  sortByItems = [
    {id: 'likes' , name:'No. of likes'},
    {id: 'views' , name:'No. of views'},
    {id: 'posts' , name:'No. of posts'},
  ]

  constructor(
    private globalServices: GlobalService,
    private apiService: ApiService
    ) { }

  ngOnInit() {
    this.dashboardData = this.globalServices.getHomeData();
    //this.notifier.notify("success", "This is Success Notification.");
    
  }

  sortDashboardData(selectedOpt) {
    this.dashboardData.sort((item1, item2) => {
      return item2[selectedOpt] - item1[selectedOpt];
    });
  }

  changePerPage(option) {
    this.perPage = option;    
  }

  exportData() {
    /*
    this.apiService.getDashboardData().subscribe((data: any) => {
      console.log("data ===> ", data);  
    }, (err) => {
      console.log("err ===> ", err);  
    });
    */
  }

}
