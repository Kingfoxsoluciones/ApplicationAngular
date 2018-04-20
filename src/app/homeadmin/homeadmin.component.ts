import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeadmin',
  templateUrl: './homeadmin.component.html',
  styleUrls: ['./homeadmin.component.css']
})
export class HomeadminComponent implements OnInit {
  
  specialEvents = []

  constructor( private dataService:DataService,
  private _router:Router) { }

  ngOnInit() {
    this.dataService.getHome().subscribe(
      res => this.specialEvents = res,
      err => {
        if( err instanceof HttpErrorResponse ) {
          if (err.status === 403) {
            this._router.navigate(['/signin'])
          }
        }
      }
    )
  }

}
