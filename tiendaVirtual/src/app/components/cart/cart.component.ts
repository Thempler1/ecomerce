import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cart$: Observable<any> | undefined;
  public productQuantity$: Observable<number> | undefined;
  public cart: any = null;
  public productQuantity: number = 0;

  public subtotal:number = 0;
  public iva: number = 0;
  public total: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart$ = this.cartService.getCart$();
    this.cart$.subscribe(any => {
      this.cart = any
      this.resumeItems();
    });

    this.productQuantity$ = this.cartService.getQuantity$();
    this.productQuantity$.subscribe(any => this.productQuantity = any)
  }

  public deleteFromCart(index: number) {
    this.cartService.deleteProductCart(index);
  }

  public resumeItems() {
    this.subtotal = 0;
    this.iva = 0;
    this.total = 0;
    this.cart.forEach((element: any) => {
      this.subtotal = this.subtotal + element.product.price;
      this.iva = this.subtotal * 0.19;
      this.total = this.subtotal + Math.round(this.iva);
    });
  }
}
