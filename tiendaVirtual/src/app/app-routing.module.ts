import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrdenCompraComponent } from './components/orden-compra/orden-compra.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'products', component: OrdenCompraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
