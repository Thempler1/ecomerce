import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public productList = [
    { id: 0, name: "C³ EQUALZ X TKC KIWI SWITCHES", description: "Los Switches Kiwi son miembros de la familia de switches frutales de TKC, junto a los Tangerines.", tags: "equalz, kiwi, tkc, tactile", type: "Táctiles", pack: 10, price: 13490, image: "https://d2r9epyceweg5n.cloudfront.net/stores/001/427/349/products/c3_equalz_x_tkc_kiwi_switches__1616035474_370ddada_progressive1-092da1760eeea5dd4816225172296946-320-0.jpg" },
    { id: 1, name: "KAIHUA HALO TRUE MECHANICAL SWITCHES", description: "Combinan los mejores atributos de los switches silenciosos y de click,lo que da como resultado una consistencia y suavidad casi perfecta con cada pulsación de tecla.", tags: "kaihua, halo, tactile", type: "Táctiles", pack: 64, price: 57290 , image: "https://d2r9epyceweg5n.cloudfront.net/stores/001/427/349/products/011-c35f6554e4a57e720016107504361329-240-0.jpg"},
    { id: 2, name: "ALPACA LINEARS SWITCHES", description: "Switches lineales suaves con resortes de 62g chapados en oro (abajo hacia afuera). Los colores se basan en la combinación de colores SA Bliss que nos trajo Minterly.", tags: "alpaca, linear, bliss",type: "Lineales", pack: 10, price: 14190, image: "https://d2r9epyceweg5n.cloudfront.net/stores/001/427/349/products/webp-net-resizeimage1-f98e5dbbadc688fd3516123805846713-240-0.jpg"},
    { id: 3, name: "KAILH NK CREAMS SWITCHES", description: "Switches lineales de los mas aclamados en el hobby. Con una case y un stem hechos de POM autolubricante, este switch ofrece una experiencia suave y única.", tags: "kailh, linear, creams", type: "Lineales", pack: 10, price: 10490, image: "https://d2r9epyceweg5n.cloudfront.net/stores/001/427/349/products/creams1-080f14e088ba87d4b616123820565903-240-0.jpg" },
    { id: 4, name: "GATERON YELLOW SWITCHES", description: "Switches mecánicos lineales amarillos, la versión más reciente de un clásico Gateron, perfecto para jugar. Compatible con SMD y LED de paso.", tags: "gateron, linear, yellow", type: "Lineales", pack: 10, price: 6490, image:"https://d2r9epyceweg5n.cloudfront.net/stores/001/427/349/products/yellow1-476ce5be32d5140e9b16129198028776-240-0.jpg" }
  ];

  constructor() { }

  public getProducts() {
    return this.productList;
  }
}
