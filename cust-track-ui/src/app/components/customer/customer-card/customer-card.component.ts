import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {

  @Input()
  customer!:Customer

  constructor() { }

  ngOnInit(): void {
  }

}
