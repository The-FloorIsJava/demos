import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  customers:Customer[] = [];

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
  }

  findFriends(){
    this.customerService.findAllFriends().subscribe({
      next: (data) =>{
        this.customers = data as Customer[];
      },
      error: (error) =>{
        console.error(error)
      }
    })
  }

}
