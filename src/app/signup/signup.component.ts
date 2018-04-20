import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  private email:string;
  private displayName:string;
  private password:string;
  private admin:string;

  constructor(private dataService:DataService,
    private _router: Router) { }

  ngOnInit() {
  }

  onAdd(){
    this.dataService.addCourses(this.email, this.password, this.displayName, this.admin).subscribe(res=>{
      localStorage.setItem('token', res.token)
      this._router.navigate(['/home'])
    }, 
    err => console.log(err));
  }
}
