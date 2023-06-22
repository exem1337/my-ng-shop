import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from 'src/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
    
  }

  getCategories() {
    return this.http.get<Array<string>>('https://fakestoreapi.com/products/categories')
  }

  getProductsByCategory(category?: string) {
    if (!category) {
      return this.http.get<Array<IProduct>>('https://fakestoreapi.com/products');
    }

    return this.http.get<Array<IProduct>>(`https://fakestoreapi.com/products/category/${category}`)
  }

  getProductById(id: number) {
    return this.http.get<IProduct>(`https://fakestoreapi.com/products/${id}`);
  }
}
