import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-orden-compra',
  templateUrl: './orden-compra.component.html',
  styleUrls: ['./orden-compra.component.css']
})
export class OrdenCompraComponent {

  public products: any = [];
  public editing = false;
  public editingIndex!: number;
  public subtotal:number = 0;
  public iva: number = 0;
  public total: number = 0;


  formularioContacto = new FormGroup({
    codigo: new FormControl(null),
    nombre: new FormControl(null),
    descripcion: new FormControl(null),
    precio: new FormControl(null),
    cantidad: new FormControl(null),
  })

  public enviar() {

    // validate empty fields
    if(
      this.formularioContacto.value.codigo === null || 
      this.formularioContacto.value.nombe === null ||
      this.formularioContacto.value.descripcion === null ||
      this.formularioContacto.value.precio === null ||
      this.formularioContacto.value.cantidad === null ||
      this.formularioContacto.value.codigo === '' || 
      this.formularioContacto.value.nombe === '' ||
      this.formularioContacto.value.descripcion === '' ||
      this.formularioContacto.value.precio === '' ||
      this.formularioContacto.value.cantidad === ''
      ){
        alert('Ingrese valore validos.');
      return;
    }

    if (this.editing) {
      this.products[this.editingIndex] = {
        codigo: this.formularioContacto.value.codigo,
        nombre: this.formularioContacto.value.nombre,
        descripcion: this.formularioContacto.value.descripcion,
        precio: this.formularioContacto.value.precio,
        cantidad: this.formularioContacto.value.cantidad
      };
    } else {
      this.products.push({
        codigo: this.formularioContacto.value.codigo,
        nombre: this.formularioContacto.value.nombre,
        descripcion: this.formularioContacto.value.descripcion,
        precio: this.formularioContacto.value.precio,
        cantidad: this.formularioContacto.value.cantidad
      });
    }
    this.editing = false;
    this.limpiar();
    this.sumarItems();
  }

  public editar(index: number) {
    this.formularioContacto.setValue(this.products[index]);
    this.editing = true;
    this.editingIndex = index;
  }
  public delete(index: number) {
    this.products.splice(index,1);
    this.sumarItems();
  }

  public limpiar() {
    this.formularioContacto.setValue({codigo: null, nombre: null, descripcion: null, precio: null, cantidad: null});
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
