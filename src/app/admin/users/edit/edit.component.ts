import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../../../api.service';
import { Users } from '../../../users';
import { Answer } from '../../../answer';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
	user: Users;
  preguntas:Array<Answer>;
  c:Array<Number>;
  suma22:Number;
  suma30:Number;

  constructor(
  	 private route: ActivatedRoute,
  	 private apiservice: ApiService
  ) { 
    this.user = new Users;
  }

  ngOnInit() {
  	this.load();
    this.apiservice.getAnswer().subscribe(a => {this.preguntas = a;});
  }

  load(){
    const id = this.route.snapshot.paramMap.get('id');
    this.apiservice.getUser(id)
      .subscribe(user =>{
        this.user = user;
        this.suma22 = this.suma1a22();
        this.suma30 = this.suma23a30();
      }
      );
  }

  addNota(arg,index){
    if(arg <= this.preguntas[index].puntos ){
    this.user.preguntas[index].nota = arg;
    this.user.preguntas[index].estado = true;
      this.apiservice.updateUser(this.user._id,this.user)
      .subscribe(user =>{
        this.load();
      }  
    );
    }else{

    }
  }

  suma1a22():number{
    let s:number=0;
    for (var i = 0; i <= 21; ++i) {
      s=s+Number(this.user.preguntas[i].nota);
    }
    return s;
  }

  suma23a30():number{
    let s:number=0;
    for (var i = 23; i <= 29; ++i) {  
      s=s+Number(this.user.preguntas[i].nota);
    }
    s = s/8;
    return s;
  }
  noCalificacion(i){
    if(i){
      return  new Array((this.preguntas)? this.preguntas[i].puntos :0);
    }else{
      return [];
    }
  }
  download(){
    let link:any;
    this.apiservice.download(this.user._id).subscribe(l =>{
      link= l;
      var a = document.createElement('a');
      // a.href="http://localhost:5000/"+link.link;
      a.href = link.link;
      a.setAttribute("download", link.link);
      document.body.appendChild(a);
      a.click();
    })
  }

}
