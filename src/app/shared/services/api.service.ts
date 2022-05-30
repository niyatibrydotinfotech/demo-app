import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = "http://192.168.2.168:3055/api";
  
  constructor(private http:HttpClient ) { }

  authenticateUser(params) {
    return this.http.post(this.API_URL + "/auth/signin", params);    
  }

  createUser(params) {
    return this.http.post(this.API_URL + "/auth/signup", params);
  }

  getDashboardData(filter) {
    return this.http.post(this.API_URL + "/getDashboardData", filter);
  }


}
