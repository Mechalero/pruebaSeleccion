import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';

import {Users} from "./users";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	private apiUrl = 'http://localhost:5000/api-v1/';
  	constructor(
  		private http: HttpClient
  	) { }

  login(query:any): Observable<any> {
    return this.http.post<any>(this.apiUrl+"autho/user", query, httpOptions);
  }
  addUser (user: Users): Observable<Users> {
    return this.http.post<Users>(this.apiUrl+"users", user, httpOptions);
  }

  getUser(id): Observable<Users>{
    return this.http.get<Users>(this.apiUrl+"user/"+id, httpOptions);
  }

  getUsers(): Observable<Users[]>{
    return this.http.get<Users[]>(this.apiUrl+"users", httpOptions);
  }

  updateUser (id:String,user: Users): Observable<any> {
    return this.http.put(this.apiUrl+"user/"+id, user, httpOptions);
  }

  download(id:String):Observable<any> {
    return this.http.get<Users>(this.apiUrl+"user-csv/"+id, httpOptions);
  }
}
