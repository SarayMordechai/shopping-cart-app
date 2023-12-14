import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private cart: Product[] = [];

  constructor() {
    this.loadCart();
  }

  addToCart(product: Product) {
    this.cart.push(product);
    this.saveCart();
  }

  getCart(): Product[] {
    return this.cart;
  }

  loadCart() {
    const savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart) as Product[];
    }
  }

  saveCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(this.cart));
  }
}
