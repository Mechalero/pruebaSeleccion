import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { ApiService } from '../../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	user:any;

	constructor(
		private apiService:ApiService,
		private route:Router
	) {
		this.user = {correo: "", pass:""};
	}

	ngOnInit() {
	}

 	login(){
  		this.apiService.admin(this.user).subscribe(
  			d => {
  				let data:any = d;
  				localStorage.setItem('token', data.token);
        		this.route.navigate(['rrhh-admin/dashboard']);       	
      		}, er =>{
            console.log(er);
      			// this.message.status = true;
      			// this.message.msj = 'Acceso denegado. Usuario no encontrado';
      		}
      	);
  	}

}
