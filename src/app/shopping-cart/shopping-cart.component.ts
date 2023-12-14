import { Component } from '@angular/core';
import {Product, ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  cartItems: Product[] = [];

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
    this.cartItems = this.shoppingCartService.getCart();
  }
}
