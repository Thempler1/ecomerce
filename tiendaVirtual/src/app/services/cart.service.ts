import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public sesionCart : any = [];
  private sesionCart$ = new Subject<any>();
  public productQuantity = 0;
  private productQuantity$ = new Subject<any>();

  constructor() { }

  public addToProductCart(toAdd: any) {
    if(this.sesionCart.length === 0) {
      this.sesionCart.push({product: toAdd, quantity: 1})
    } else {
      let duplicated = false;
      this.sesionCart.forEach((element : any) => {
        if (element.product.id == toAdd.id) {
          element. quantity++;
          duplicated = true;
        }
      });
      if (!duplicated) {
        this.sesionCart.push({product: toAdd, quantity: 1})
      }
    }
    this.productQuantity++
    this.sesionCart$.next(this.sesionCart);
    this.productQuantity$.next(this.productQuantity);
  }

  public getCart$(): Observable<any> {
    return this.sesionCart$.asObservable();
  }

  public getQuantity$(): Observable<number> {
    return this.productQuantity$.asObservable();
  }

  public deleteProductCart(index: number) {
    this.sesionCart.splice(index,1);
    this.productQuantity = 0;
    this.sesionCart.forEach((element: { quantity: number; }) => {
      this.productQuantity = this.productQuantity + element.quantity
    });
    this.sesionCart$.next(this.sesionCart);
    this.productQuantity$.next(this.productQuantity);
  }

  // TODO: create method "sumarItems()"
  // public sumarItems(){
  //   this.subtotal = 0;
  //   this.iva = 0;
  //   this.total = 0;
  //   this.cart.forEach((element: any) => {
  //     this.subtotal = this.subtotal + element.precio;
  //     this.iva = this.subtotal*0.19;
  //     this.total = this.subtotal + Math.round(this.iva);
  //   });
  // }
}
