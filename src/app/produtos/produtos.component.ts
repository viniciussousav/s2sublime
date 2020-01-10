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
  editar: boolean[];
  cadastrando: boolean;
  edtProduto: Produto = new Produto();
  constructor(private produtoService:ProdutosService) { 
      this.produtos = this.produtoService.getProdutos();
      this.categorias = this.produtoService.getCategorias();
      this.queryResult = [];
      this.cadastrando = false;
      this.editar = [];
      for(let i = 0; i < this.produtos.length; i++){
        this.editar.push(false);
      }
  }

  ngOnInit() {
    this.produtos = this.produtoService.getProdutos();

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

  deletar(index: number){
    this.produtoService.deleteProduto(index);
    this.produtos = this.produtoService.getProdutos();
    this.categorias = this.produtoService.getCategorias();
    this.editar.splice(index, 1);
  }

  atualizar(index:number){
    this.produtoService.editarProduto(this.edtProduto, index);
    this.produtos = this.produtoService.getProdutos();
    for(let i = 0; i < this.produtos.length; i++){
      this.editar[i] = false;
    }
    this.edtProduto = new Produto();
  }

  aumentarUnidade(index: number){
    this.produtoService.increaseProduto(index);
  }

  diminuirUnidade(index: number){
    this.produtoService.decreaseProduto(index);
  }


  //funcões auxiliares

  exibirCadastrar(){
    this.cadastrando = !this.cadastrando;
  }

  editarProduto(index: number){
    for(let i = 0; i < this.produtos.length; i++){
      if(i == index && this.editar[index]){
        this.editar[index] = false;
      } else if(i == index && this.editar[index] == false) {
        this.editar[index] = true;
      } else{
        this.editar[i] = false;
      }
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
