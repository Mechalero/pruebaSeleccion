import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import {Users} from "./users";
import {Answer} from "./answer";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // private apiUrl = '/api-v1/';
  private apiUrl = 'http://localhost:5000/api-v1/';
  private headers:HttpHeaders;

  	constructor(
  		private http: HttpClient
  	) {}

  login(query:any): Observable<any> {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(this.apiUrl+"autho/user", query, {headers:this.headers});
  }
  addUser (user: Users): Observable<Users> {
    this.headers = new HttpHeaders({'Content-Type': 'application/json','access-token':localStorage.getItem("token")});
    return this.http.post<Users>(this.apiUrl+"users", user, {headers:this.headers});
  }

  getUser(id): Observable<Users>{
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get<Users>(this.apiUrl+"user/"+id, {headers:this.headers});
  }

  getUsers(): Observable<Users[]>{
    this.headers = new HttpHeaders({'Content-Type': 'application/json','access-token':localStorage.getItem("token")});
    return this.http.get<Users[]>(this.apiUrl+"users", {headers:this.headers});
  }

  getAnswer(): Observable<Answer[]>{
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get<Answer[]>(this.apiUrl+"answers", {headers:this.headers});
  }
  
  updateUser (id:String,user: Users): Observable<any> {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put(this.apiUrl+"user/"+id, user, {headers:this.headers});
  }

  download(id:String):Observable<any> {
    this.headers = new HttpHeaders({'Content-Type': 'application/json','access-token':localStorage.getItem("token")});
    return this.http.get<Users>(this.apiUrl+"user-csv/"+id, {headers:this.headers});
  }
  admin(u:any):Observable<any>{
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(this.apiUrl+"autho/admin",u,{headers:this.headers});
  }
}
