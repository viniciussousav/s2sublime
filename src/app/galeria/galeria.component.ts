import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from '../produtos/produtos.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  queryResult: Produto[];
  categorias: string[];

  constructor(private produtoService:ProdutosService) {
    this.queryResult = this.produtoService.getProdutos();
    this.categorias = this.listCategorias();
  }

  ngOnInit() {
    this.queryResult = this.produtoService.getProdutos();
    this.categorias = this.listCategorias();
  }

  searchByCategoria(categoria:string){
    this.queryResult = this.produtoService.getProdutosByCategoria(categoria);
  }

  selectProduct(i:number){
    console.log(this.queryResult[i]);
  }

  listCategorias(): string[] {
    let categorias: string[] = this.produtoService.getCategorias();
    for (let i = 0; i < categorias.length; i++) {
      categorias[i] = categorias[i].charAt(0) + categorias[i].slice(1).toLowerCase();
    }
    return categorias;
  }
}
