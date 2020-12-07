import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';
import { TipoEsgotamentoComponent } from './tipo-esgotamento/tipo-esgotamento.component';

let routes = [
  { path : "tipo-esgotamento", component: TipoEsgotamentoComponent},
  { path : "**" , redirectTo:"/tipo-esgotamento"}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
