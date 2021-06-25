import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  public productList: any = null;

  constructor(private productosService: ProductService, private cartService: CartService) {}

  ngOnInit(){
    this.productList = this.productosService.getProducts();
  }

  public addToCart(index: number){
    this.cartService.addToProductCart(this.productList[index]);
  }

  public deleteFromCart(index: number) {
    this.cartService.deleteProductCart(index);
  }
}
