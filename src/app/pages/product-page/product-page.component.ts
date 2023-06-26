import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, tap } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service.service';
import { IProduct } from 'src/models/product.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  public product: IProduct;
  private id: number;
  public currentCount = 1;

  constructor(
    private route: ActivatedRoute,
    public productService: ProductsService,
    private cartService: CartService,
    private toastr: ToastrService
  ) {
    this.route.params.subscribe((res) => this.id = +res['id']);
  }
  
  onCountDecrease() {
    if (this.currentCount !== 1) {
      this.currentCount -= 1;
    }
  }

  onCountIncrease() {
    this.currentCount += 1;
  }

  onAddToCart() {
    this.cartService.addToCart(this.product, this.currentCount);
    this.toastr.success(`На сумму ${this.product.price * this.currentCount} $`, `Добавлено ${this.currentCount} ${this.product.title}`);
    this.currentCount = 1;
  }

  ngOnInit(): void {
    this.productService.getProductById(this.id).subscribe((res) => this.product = res);
  }
}
