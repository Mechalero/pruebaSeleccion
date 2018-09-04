import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router }  from "@angular/router";


declare class Message{
	status:Boolean;
	msj:String;
}
// const routes: Message = { path: 'heroes', component: HeroesComponent };
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
	documento:String;
	message:Message;

	constructor(private apiService: ApiService,private router:Router) { 
		this.message = {
			status:false,
			msj: ''
		}
		// this.message.status = false;
		// this.message.msj = '';
	}

  	ngOnInit() {

  	}

  	login(){
  		this.apiService.login({ documento: this.documento }).subscribe(
  			d => {
  				let data:any = d;
  				localStorage.setItem('token', data.token);
        		localStorage.setItem('id', data.id);
        		this.router.navigateByUrl("/exam");        	
      		}, er =>{
      			this.message.status = true;
      			this.message.msj = 'Acceso denegado. Usuario no encontrado';
      		}
      	);
  	}

}
