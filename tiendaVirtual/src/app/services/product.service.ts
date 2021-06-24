import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public productList = [
    { name: "C³ EQUALZ X TKC KIWI SWITCHES", description: "Los Switches Kiwi son miembros de la familia de switches frutales de TKC, junto a los Tangerines.", type: "Táctiles", pack: 10, price: 13490 },
    { name: "KAIHUA HALO TRUE MECHANICAL SWITCHES", description: "Combinan los mejores atributos de los switches silenciosos y de click,lo que da como resultado una consistencia y suavidad casi perfecta con cada pulsación de tecla.", type: "Táctiles", pack: 64, price: 57290 },
    { name: "ALPACA LINEARS SWITCHES", description: "Switches lineales suaves con resortes de 62g chapados en oro (abajo hacia afuera). Los colores se basan en la combinación de colores SA Bliss que nos trajo Minterly.", type: "Lineales", pack: 10, price: 14190 },
    { name: "KAILH NK CREAMS SWITCHES", description: "lineales de los mas aclamados en el hobby. Con una case y un stem hechos de POM autolubricante, este switch ofrece una experiencia suave y única.", type: "Lineales", pack: 10, price: 10490 },
    { name: "Gateron Yellow Switches", description: "Switches mecánicos lineales amarillos, la versión más reciente de un clásico Gateron, perfecto para jugar. Compatible con SMD y LED de paso.", type: "Lineales", pack: 10, price: 6490 }
  ];

  constructor() { }

  public getProducts() {
    return this.productList;
  }
}
