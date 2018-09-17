import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Router} from '@angular/router';


import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {



  constructor(
  	private apiservice:ApiService,
  	private route:Router,
    private location:Location
  	){}

  ngOnInit() {
  	if(!localStorage.getItem('token')){
  		this.route.navigate(['rrhh-admin/login']);
  	}
  }

  isLogin(){
    return (this.location.path() == '/rrhh-admin/login' ) ? true: false;
  }

}
