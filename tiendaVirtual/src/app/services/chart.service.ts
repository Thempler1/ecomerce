import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  public sesionChart : any = [];
  private sesionChart$ = new Subject<any>();
  public productQuantity = 0;
  private productQuantity$ = new Subject<any>();

  constructor() { }

  public addToProductChart(toAdd: any) {
    if(this.sesionChart.length === 0) {
      this.sesionChart.push({product: toAdd, quantity: 1})
    } else {
      let duplicated = false;
      this.sesionChart.forEach((element : any) => {
        if (element.product.id == toAdd.id) {
          element. quantity++;
          duplicated = true;
        }
      });
      if (!duplicated) {
        this.sesionChart.push({product: toAdd, quantity: 1})
      }
    }
    this.productQuantity++
    this.sesionChart$.next(this.sesionChart);
    this.productQuantity$.next(this.productQuantity);
  }

  public getChart$(): Observable<any> {
    return this.sesionChart$.asObservable();
  }

  public getQuantity$(): Observable<number> {
    return this.productQuantity$.asObservable();
  }

  public deleteProductChart(index: number) {
    this.sesionChart.splice(index,1);
    this.productQuantity = 0;
    this.sesionChart.forEach((element: { quantity: number; }) => {
      this.productQuantity = this.productQuantity + element.quantity
    });
    this.sesionChart$.next(this.sesionChart);
    this.productQuantity$.next(this.productQuantity);
  }

  // TODO: create method "sumarItems()"
  // public sumarItems(){
  //   this.subtotal = 0;
  //   this.iva = 0;
  //   this.total = 0;
  //   this.chart.forEach((element: any) => {
  //     this.subtotal = this.subtotal + element.precio;
  //     this.iva = this.subtotal*0.19;
  //     this.total = this.subtotal + Math.round(this.iva);
  //   });
  // }
}
