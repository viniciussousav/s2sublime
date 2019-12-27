import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from "./produtos.service";

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  categorias: string[];
  produto:Produto = new Produto();
  produtos: Produto[];
  queryResult:Produto[];
  consulta: string;

  constructor(private produtoService:ProdutosService) { 
      this.produtos = [];
      this.categorias = [];
      this.queryResult = [];
  }

  ngOnInit() {
  }

  cadastrar(produto:Produto){
    if(this.emptyField(produto)){
      this.produtoService.cadastrarProduto(produto);
      this.produtos = this.produtoService.getProdutos();
      this.categorias = this.produtoService.getCategorias();
      this.produto = new Produto();
    } else {
      alert("Preencha todos os campos");
    }
    
  }

  emptyField(produto: Produto): boolean {
    if(produto.nome.length == 0 || produto.categoria.length == 0 || 
      produto.descricao.length == 0|| produto.tamanho.length == 0){
        return false;
      } else {
        return true;
      }
  }
}
