import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  userDetails: any = {};
  userToken = "";

  routeData = {
    root: '/',
    auth: '/auth',
    account: '/accounts',
    pricing: '/pricing',
    dashboard: '/dashboard',
    notFound: 'not-found'
  }

  constructor(private router: Router) {
    if(localStorage.getItem('dt_user_token')) {
      this.userToken = localStorage.getItem('dt_user_token');
    }
  }

  setUserDetails(data: any) {
    this.userDetails = data;
  }

  getHomeData() {
    return [
      {date:'12/06/2021', likes: 25, views: 80, posts: 10},
      {date:'11/06/2021', likes: 15, views: 82, posts: 10},
      {date:'10/06/2021', likes: 28, views: 75, posts: 10},
      {date:'09/06/2021', likes: 32, views: 76, posts: 10},
      {date:'08/06/2021', likes: 35, views: 73, posts: 10},
      {date:'07/06/2021', likes: 30, views: 65, posts: 10},
      {date:'06/06/2021', likes: 29, views: 85, posts: 10},
      {date:'05/06/2021', likes: 20, views: 23, posts: 10}
    ];
  }

  getUserToken() {
    return this.userToken;
  }

  isAuthentication() {
    const accessToken = localStorage.getItem('dt_user_token');
    if (!!accessToken) {
      return true;
    }
    return false;
  }

}
