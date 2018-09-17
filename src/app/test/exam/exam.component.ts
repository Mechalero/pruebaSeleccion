import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router }  from "@angular/router";

import { Users } from '../../users';
import { ANSWER } from '../../mock-answer';

declare var $: any;


@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  exam1:any = ANSWER;
  user:Users;
  constructor(
    private router: Router,
    private apiService: ApiService
  ){
    this.user = new Users();
  }

  ngOnInit() {
    if(!localStorage.getItem('id')){
      this.router.navigateByUrl("/");
    }else{
      this.apiService.getUser(localStorage.getItem('id')).subscribe(
        user => {
            this.user = user;
            this.user.estado = "";
          }, er =>{
            console.log("error");
          }
        );
    } 
  }
  add(){
    this.user.preguntas = this.exam1;
    this.user.estado = "done";
  	this.apiService.updateUser(this.user._id,this.user)
     .subscribe(() => $('#confirmation').modal('hide'));
  }

}
