import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public productQuantity$: Observable<number> | undefined;
  public productQuantity = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.productQuantity$ = this.cartService.getQuantity$();
    this.productQuantity$.subscribe(any => this.productQuantity = any)
  }

}
