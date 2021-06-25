import { Component } from '@angular/core';
import { ChartService } from 'src/app/services/chart.service';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  public chart$: Observable<any> | undefined ;
  public productQuantity$: Observable<number> | undefined;
  public productList: any = null;
  public chart: any = null;
  public productQuantity: number = 0;
  

  constructor(private productosService: ProductService, private chartService: ChartService) {}

  ngOnInit(){
    this.productList = this.productosService.getProducts();
    
    this.chart$ = this.chartService.getChart$();
    this.chart$.subscribe(any => this.chart = any);

    this.productQuantity$ = this.chartService.getQuantity$();
    this.productQuantity$.subscribe(any => this.productQuantity = any)
  }

  public subtotal:number = 0;
  public iva: number = 0;
  public total: number = 0;


  public addToChart(index: number){
    this.chartService.addToProductChart(this.productList[index]);
  }

  public deleteFromChart(index: number) {
    this.chartService.deleteProductChart(index);
  }
}
