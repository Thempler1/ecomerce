import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  public cart$: Observable<any> | undefined ;
  public productQuantity$: Observable<number> | undefined;
  public productList: any = null;
  public cart: any = null;
  public productQuantity: number = 0;
  

  constructor(private productosService: ProductService, private cartService: CartService) {}

  ngOnInit(){
    this.productList = this.productosService.getProducts();
    
    this.cart$ = this.cartService.getCart$();
    this.cart$.subscribe(any => this.cart = any);

    this.productQuantity$ = this.cartService.getQuantity$();
    this.productQuantity$.subscribe(any => this.productQuantity = any)
  }

  public subtotal:number = 0;
  public iva: number = 0;
  public total: number = 0;


  public addToCart(index: number){
    this.cartService.addToProductCart(this.productList[index]);
  }

  public deleteFromCart(index: number) {
    this.cartService.deleteProductCart(index);
  }
}
