import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { GaleriaComponent } from './galeria/galeria.component';


const routes: Routes = [
  {
    path: '', component: PaginaInicialComponent
  },
  {
    path:'cadastrar_produto', component: ProdutosComponent
  },
  {
    path:'galeria', component: GaleriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
