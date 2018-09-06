import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../../../api.service';
import { Users } from '../../../users';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
	user: Users;

  constructor(
  	 private route: ActivatedRoute,
  	 private apiservice: ApiService
  	 ) { }

  ngOnInit() {
  	
  	this.load();
  }

  load(){
    const id = this.route.snapshot.paramMap.get('id');
    this.apiservice.getUser(id)
      .subscribe(user =>
        this.user = user
      );
  }

  addNota(arg,index){
    this.user.preguntas[index].nota = arg;
    this.apiservice.updateUser(this.user._id,this.user)
      .subscribe(user =>{
        this.load();
      }  
    );
  }
  download(){
    let link:any;
    this.apiservice.download(this.user._id).subscribe(l =>{
      link= l;
      console.log(link.link)
      var a = document.createElement('a');
      // a.href="http://localhost:5000/"+link.link;
      a.href = "http://localhost:5000/download/datos.csv"
      a.setAttribute("download", "download");
      document.body.appendChild(a);
      a.click();
      // location.href= "localhost:5000/api-v1/"+link.link;
    })
  }

}
