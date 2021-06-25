import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-orden-compra',
  templateUrl: './orden-compra.component.html',
  styleUrls: ['./orden-compra.component.css']
})
export class OrdenCompraComponent {

  public productList: any = null;

  constructor(private productosService: ProductService) {}

  ngOnInit(){
    this.productList = this.productosService.getProducts();
  }

  public chart: any = [];

  public products: any = [];
  public subtotal:number = 0;
  public iva: number = 0;
  public total: number = 0;

  public addToChart(index :number){
    if (this.chart.length === 0) {
      this.chart.push({product: this.productList[index], quantity:1});
    } else {
      let duplicated = false;
      this.chart.forEach((element: any) => {
        if(element.product.id == this.productList[index].id) {
          element.quantity++;
          duplicated = true;
        }
      });
      if (!duplicated){
        this.chart.push({product: this.productList[index], quantity:1});
      }
    }
    console.log(this.chart);
  }

  public enviar(index :number) {
      this.products.push(this.productList[index]);
      console.log(this.products);
  }

  public delete(index: number) {
    this.products.splice(index,1);
    this.sumarItems();
  }

  public sumarItems(){
    this.subtotal = 0;
    this.iva = 0;
    this.total = 0;
    this.products.forEach((element: any) => {
      this.subtotal = this.subtotal + element.precio;
      this.iva = this.subtotal*0.19;
      this.total = this.subtotal + Math.round(this.iva);
    });
  }
}
