import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ship-and-pay',
  templateUrl: './ship-and-pay.component.html',
  styleUrls: ['./ship-and-pay.component.css']
})
export class ShipAndPayComponent implements OnInit {

  public cart$: Observable<any> | undefined;
  public cart: any = [];
  public subtotal: number = 0;
  public iva: number = 0;
  public total: number = 0;
  public shipForm!: FormGroup;
  public paymentForm!: FormGroup;
  public shipSubmitted = false;
  public paymentSubmitted = false;
  public shipSuccess = false;
  public paymentSuccess = false;
  public shipData: any;
  public paymentData: any;

  constructor(private cartService: CartService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.resumeItems();
    this.cart$ = this.cartService.getCart$();
    this.cart$.subscribe(any => {
      this.cart = any
      this.resumeItems();
      if (this.cart.length == 0) {
        this.router.navigate(['products']);
      }
    });

    this.shipForm = this.formBuilder.group({
      country: ['', [Validators.required, Validators.minLength(4)]],
      address: ['', [Validators.required, Validators.minLength(6)]],
      city: ['', [Validators.required, Validators.minLength(3)]],
      state: ['', [Validators.required, Validators.minLength(3)]],
      zipcode: ['', [Validators.required, Validators.minLength(6)]],
    }, {});

    this.paymentForm = this.formBuilder.group({
      cardType: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
      cardNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      ccv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      expMonth: ['', Validators.required],
      expYear: ['', Validators.required],
    }, {});
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

  public get f() { return this.shipForm.controls; }
  public get p() { return this.paymentForm.controls; }

  public onSubmitShip() {
    this.shipSubmitted = true;
    if (this.shipForm.invalid) {
      return;
    }
    alert('Datos de envío guardados');
    this.shipSuccess = true;
    this.shipData= this.shipForm.value;
  }

  public onResetShip() {
    this.shipSubmitted = false;
    this.shipForm.reset();
  }

  public onSubmitPayment() {
    this.paymentSubmitted = true;
    if (this.paymentForm.invalid) {
      return;
    }
    alert('Datos de pago guardados');
    this.paymentSuccess = true;
    this.paymentData = this.paymentForm.value;
  }

  public onResetPayment() {
    this.paymentSubmitted = false;
    this.paymentForm.reset();
  }

  public payout() {
    if (this.shipSuccess && this.paymentSuccess) {
      alert('Pago exitoso');
    } else {
      alert('Debe validar los datos de envio y de pago');
    }
  }
}
