import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './app-product.component.html',
  styleUrls: ['./app-product.component.scss']
})
export class AppProductComponent {
  @Input() product: IProduct;

  constructor(private router: Router) {}

  onProductClick() {
    this.router.navigate([`products/${this.product.id}`])
  }
}
