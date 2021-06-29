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
  public text = '';
  public match: any[] = [];

  constructor(private productosService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.productList = this.productosService.getProducts();
  }

  public addToCart(index: number) {
    this.cartService.addToProductCart(this.productList[index]);
  }

  public deleteFromCart(index: number) {
    this.cartService.deleteProductCart(index);
  }
  public toFilter() {
    this.match = [];
    for (let prod of this.productList) {
      if (prod.name.toLowerCase().indexOf(this.text) !== -1 || prod.type.toLowerCase().indexOf(this.text) !== -1 || prod.tags.toLowerCase().indexOf(this.text) !== -1) {
        this.match.push(prod);
      }
    }
    console.log(this.match);
  }

  public addToCartFilter(index: number) {
    this.cartService.addToProductCart(this.match[index]);
  }
}
