import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartService } from 'src/app/services/chart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public productQuantity$: Observable<number> | undefined;
  public productQuantity = 0;

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    this.productQuantity$ = this.chartService.getQuantity$();
    this.productQuantity$.subscribe(any => this.productQuantity = any)
  }

}
