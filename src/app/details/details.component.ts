import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { foods } from '../food';
import { IFoods } from '../IFoods';
import { FoodService } from '../food.service';

@Component({
  selector: 'details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  foods: IFoods = {} as IFoods;

  id: number = 0;

  constructor(private route: ActivatedRoute, private CS: FoodService) {}

  addToCart() {
    alert('added to cart');
    this.CS.addToCart(this.foods);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.foods = foods[this.id];
    });
  }
}
