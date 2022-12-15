import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url : string = "http://localhost:8080"
  customer : Customer = {customerName:''}

  constructor(private http:HttpClient) { }

  login(customer:Customer):Observable<unknown>{
    return this.http.post(`${this.url}/login`, customer, {responseType: 'text', observe: 'response' as 'body'})
  }

  logout(){
    localStorage.removeItem("token")
  }


}
