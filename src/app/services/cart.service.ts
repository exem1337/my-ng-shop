import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ICartProduct, IProduct } from 'src/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<ICartProduct> = [];
  
  get cartSum(): number {
    return this.cart?.reduce((acc, el) => acc += el.price * el.count, 0);
  }

  constructor(private toast: ToastrService) { 
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
    }
  }

  saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  addToCart(product: IProduct, count: number) {
    const foundProduct = this.cart.find((item) => item.id === product.id);

    if (foundProduct) {
      foundProduct.count += count;
      this.saveToStorage();
      return;
    }

    this.cart.push({
      ...product,
      count
    })
    
    this.saveToStorage();
  }

  removeFromCart(id: number) {
    this.cart = this.cart.filter((item) => item.id !== id);
    this.saveToStorage();
    this.toast.show('Товар удален из корзины')
  }

  decreaseCount(id: number) {
    const foundProduct = this.cart.find((item) => item.id === id);
    if (foundProduct) {
      foundProduct.count--;
      
      if (foundProduct.count === 0) {
        this.removeFromCart(foundProduct.id);
      }
    }
    this.saveToStorage();
  }

  increaseCount(id: number) {
    const foundProduct = this.cart.find((item) => item.id === id);
    if (foundProduct) {
      foundProduct.count++;
    }
    this.saveToStorage();
  }
}
