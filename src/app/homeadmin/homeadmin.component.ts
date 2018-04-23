import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeadmin',
  templateUrl: './homeadmin.component.html',
  styleUrls: ['./homeadmin.component.css']
})
export class HomeadminComponent implements OnInit {s

  constructor( private dataService:DataService,
  private _router:Router) { }

  ngOnInit() {
    this.dataService.getHome().subscribe(
      res => console.log(res.status),
      err => {
        if( err instanceof HttpErrorResponse ) {
          if (err.status === 401) {
            this._router.navigate(['/signin'])
          }
        }
      }
    )
  }

}
