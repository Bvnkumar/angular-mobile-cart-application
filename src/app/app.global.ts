import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  currency: string;
  quantity: number;
}

export interface CommentEntry {
  id: number;
  comment: string;
  rating: number;
}

@Injectable()
export class AppGlobals {
  cartProduts: number[] = [];
  comments: CommentEntry[] = [];
  productList: Product[] = [
    { name: 'samsung', price: 12, currency: '$', id: 1, quantity: 1 },
    { name: 'Nokia', price: 13, currency: '$', id: 2, quantity: 1 },
    { name: 'Mi', price: 14, currency: '$', id: 3, quantity: 1 },
    { name: 'Huawai', price: 15, currency: '$', id: 4, quantity: 1 }
  ];
}
