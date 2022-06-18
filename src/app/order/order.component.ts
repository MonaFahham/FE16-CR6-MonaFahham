import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { IFoods } from '../IFoods';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  customer = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
  });

  card: Array<IFoods> = [];
  total: number = 0;
  look: number = 0;
  bth: number = 0;
  free: number = 0;
  one: number = 0;

  constructor(private CS: FoodService) {}

  onSubmit() {
    if (this.customer.valid) {
      window.alert('Order was successful');
    }
  }

  ngOnInit(): void {
    this.card = this.CS.getCart();
    this.total = this.CS.sumtotal();
    this.look = this.CS.service();
    this.bth = this.CS.booth();
    this.free = this.CS.fre();
    this.one = this.CS.last();
  }
}
