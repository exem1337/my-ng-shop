import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(
    public cartService: CartService,
    private router: Router
  ) {}

  onDeleteProduct(id: number) {
    this.cartService.removeFromCart(id);
  }

  onIncreaseCount(id: number) {
    this.cartService.increaseCount(id);
  }

  onDecreaseCount(id: number) {
    this.cartService.decreaseCount(id);
  }

  onGoToProduct(id: number) {
    this.router.navigate([`products/${id}`])
  }
}
