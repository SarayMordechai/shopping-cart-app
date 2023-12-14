import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private cart: CartItem[] = [];

  constructor() {
    this.loadCart();
  }

  addToCart(product: Product) {
    const existingItem = this.cart.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
    this.saveCart();
  }

  removeFromCart(productId: number) {
    const existingItemIndex = this.cart.findIndex(item => item.product.id === productId);
    if (existingItemIndex !== -1) {
      if (this.cart[existingItemIndex].quantity > 1) {
        this.cart[existingItemIndex].quantity--;
      } else {
        this.cart.splice(existingItemIndex, 1);
      }
    }
    this.saveCart();
  }

  getCart(): CartItem[] {
    return this.cart;
  }

  private saveCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(this.cart));
  }

  private loadCart() {
    const savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart) as CartItem[];
    }
  }
}
