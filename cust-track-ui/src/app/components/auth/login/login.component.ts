import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // THE object should made the JSON we wish to send when logging in
  customer: Customer = {
    "customerName": "",
    "password": ""
  }
  
  loginStatus = ''

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.customer).subscribe({
      next: (data) =>{
        if(data instanceof HttpResponse<any>){
          this.loginStatus  = `${data.body} Welcome Back ${this.customer.customerName}`
          let token = data.headers.get('authorization')
          if(token) localStorage.setItem("token", token)
        }
      },
      error: (error) =>{
        this.loginStatus  = `Incorrect Username or Password`
        console.log(error)
      }
    })
  }

}
