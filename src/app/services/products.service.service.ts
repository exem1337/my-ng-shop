import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from 'src/models/product.model';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public isLoading$: Observable<boolean>;

  constructor(private http: HttpClient) {
    
  }

  getCategories() {
    this.isLoading$ = of(true);
    return this.http.get<Array<string>>('https://fakestoreapi.com/products/categories').pipe(
      tap(() => this.isLoading$ = of(false))
    )
  }

  getProductsByCategory(category?: string, noLoading?: boolean) {
    !noLoading && (this.isLoading$ = of(true));
    if (!category) {
      return this.http.get<Array<IProduct>>('https://fakestoreapi.com/products').pipe(
        tap(() => this.isLoading$ = of(false))
      );
    }

    return this.http.get<Array<IProduct>>(`https://fakestoreapi.com/products/category/${category}`).pipe(
      tap(() => this.isLoading$ = of(false))
    );
  }

  getProductById(id: number) {
    this.isLoading$ = of(true);
    return this.http.get<IProduct>(`https://fakestoreapi.com/products/${id}`).pipe(
      tap(() => this.isLoading$ = of(false))
    );
  }
}
