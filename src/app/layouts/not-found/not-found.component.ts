import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  @ViewChild('customNotification', { static: true }) customNotificationTmpl;
  
  constructor() { }

  ngOnInit() {
  }

}
