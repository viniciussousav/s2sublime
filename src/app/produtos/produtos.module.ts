import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './produtos.component';
import { FormsModule }   from '@angular/forms';



@NgModule({
  declarations: [
    ProdutosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProdutosComponent
  ]
})
export class ProdutosModule { }
