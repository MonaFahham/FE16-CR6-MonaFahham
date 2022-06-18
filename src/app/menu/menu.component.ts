import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { foods } from '../food';
import { IFoods } from '../IFoods';
import { FoodService } from '../food.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  // foods: IFoods[] = foods;
  foods: Array<IFoods> = foods;

  constructor(
    private route: ActivatedRoute,
    private FoodService: FoodService
  ) {}
  addToCart(obj: IFoods) {
    window.alert('Your product has been added to the cart!');
    this.FoodService.addToCart(obj);
  }

  ngOnInit(): void {}
}
