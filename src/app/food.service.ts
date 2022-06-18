import { Injectable } from '@angular/core';
import { IFoods } from './IFoods';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  card: Array<IFoods> = [];

  constructor() {}

  addToCart(food: IFoods) {
    this.card.push(food);
  }

  getCart() {
    return this.card;
  }

  clearCart() {
    this.card = [];
    return this.card;
  }
}
