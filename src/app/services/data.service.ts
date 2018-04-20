import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  private _registerUrl = "http://localhost:3001/api/signup";
  private _loginUrl = "http://localhost:3001/api/signin";
  private _privateUrl = "http://localhost:3001/api/private";

  constructor(private http:HttpClient) { }

  addCourses(course:string, course1:string, course2:string, course3:string){
    const data = { email:course, password:course1, displayName:course2, admin: course3}
    return this.http.post<any>(this._registerUrl, data)
  }

  addLogin(course:string, course1:string){
    const data = { email:course, password:course1}
    return this.http.post<any>(this._loginUrl, data)
  }

  getHome() {
    return this.http.get<any>(this._privateUrl)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
}
