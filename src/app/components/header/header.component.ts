import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    public cartService: CartService,
    private router: Router,
  ) {}

  onGoToCart() {
    this.router.navigate(['cart'])
  }

  onGoToMain() {
    this.router.navigate([''])
  }
}
