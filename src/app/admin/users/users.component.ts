import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

import { Users } from '../../users';
declare var $: any;

declare interface Alert{
  message: String;
  status: Boolean;
  code?: String;
  class?: String;
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	users:Array<Users>;
  user:Users;
  alert:Alert;
  date:Date;
  	constructor(
  		private apiService: ApiService
  	) { 
      this.user = new Users();
      this.user.tipoDoc = "";
      this.alert = {status :false , message:'', class:''};
      this.date = new Date();
    }

  	ngOnInit() {
  		this.load();
  	}
    load(){
      this.apiService.getUsers().subscribe(
        users => {
            this.users = users;
            this.alert = {status :false , message:'', class:''};
          }, er =>{
            this.alert = {status :true , message:'No se pudo obtener los usuarios de la API', class:'alert alert-warning'};
          }
        );
    }
    addUser(valid){
      if(valid){
        this.apiService.addUser(this.user).subscribe(user => {
          this.load();
          this.alert = {status :true , message:'Usuario nuevo fue creado', class:'alert alert-success'};
          $('#exampleModal').modal('hide');
        },error =>{
          this.alert = {status :true , message:'Usuario nuevo no fue creado', class:'alert alert-danger'};
        });
      }
    }
}
