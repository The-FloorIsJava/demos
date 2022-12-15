import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url : string = "http://localhost:8080"
  customers: Customer[] = []

  constructor(private http:HttpClient) { }

  findAllFriends():Observable<unknown>{
    return this.http.get(`${this.url}/customer`, {headers: this.setHttpAuth()})
  }

  setHttpAuth():HttpHeaders{
    let token = localStorage.getItem("token")
    if(token) return new HttpHeaders({authorization:token})
    return new HttpHeaders();
  }
}
