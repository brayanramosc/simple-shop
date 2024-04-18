import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IApiResponseProduct } from './models/product-api.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductsApiService {
  private readonly URL_PRODUCTS = 'https://fakestoreapi.com/products';
  httpClient = inject(HttpClient);

  getProducts() {
    return this.httpClient.get<IApiResponseProduct[]>(this.URL_PRODUCTS);
  }
}
