import {Component} from '@angular/core';
import {CartItem , ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  cartItems: CartItem[] = [];

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
    this.cartItems = this.shoppingCartService.getCart();
  }

  removeFromCart(productId: number) {
    this.shoppingCartService.removeFromCart(productId);
    this.cartItems = this.shoppingCartService.getCart(); // Refresh the list
  }
}
