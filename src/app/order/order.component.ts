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
  customerInfo = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
  });

  Products: Array<IFoods> = [];
  // sum: number = 0;
  // service: number = 0;
  // total: number = 0;
  // free: number = 0;
  // vat: number = 0;

  constructor(private CS: FoodService) {}

  onSubmit() {
    if (this.customerInfo.valid) {
      window.alert('Order was successful');
    }
  }

  ngOnInit(): void {
    // this.Products = this.CS.getCart();
    // this.sum = this.CS.sum();
    // this.service = this.CS.service();
    // this.total = this.CS.total();
    // this.free = this.CS.free();
    // this.vat = this.CS.vat();
  }
}
