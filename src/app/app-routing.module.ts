import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';
import { ResumoComponent } from './resumo/resumo.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { FaturamentoComponent } from './faturamento/faturamento.component';
import { TipoEsgotamentoComponent } from './tipo-esgotamento/tipo-esgotamento.component';

let routes = [
  { path : "resumo", component: ResumoComponent},
  { path : "consulta", component: ConsultaComponent},
  { path : "faturamento", component: FaturamentoComponent},
  { path : "tipo-esgotamento", component: TipoEsgotamentoComponent},
  { path : "**" , redirectTo:"/resumo"}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
