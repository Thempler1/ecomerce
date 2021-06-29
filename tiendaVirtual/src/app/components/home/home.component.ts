import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public productList: any = null;
  public firsthalf  : any = [];
  public secondhalf : any = [];

  constructor( private productService : ProductService) { }

  ngOnInit(): void {
    this.productList= this.productService.getProducts();
    this.spliceList();
  }

  spliceList(){
    let counter = 0;
    this.productList.forEach((element: any) => {
      if (counter < 3) {
        this.firsthalf.push(element);
      } else {
        this.secondhalf.push(element);
      }
      counter++
    });
  }

}
