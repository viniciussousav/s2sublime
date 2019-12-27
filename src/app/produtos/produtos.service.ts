import { Injectable } from '@angular/core';
import { Produto } from "../produto";
import { ProdutosComponent } from "./produtos.component";

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: Produto[];

  constructor() {
    //Template pra testes
    var a: Produto = new Produto();
    a.create("Caneca do papai", 0,"A caneca do seu veio", "U","Caneca");
    var b: Produto = new Produto();
    b.create("Camisa da mamãe", 1,"A camisa de amor da mamãe", "M","Camisa");
    var c: Produto = new Produto();
    c.create("Caneca do bigode",1,"Aquele bigode que você respeita", "U","Caneca");
    var d: Produto = new Produto();
    d.create("Quadro de natal", 1,"Deixe seu Natal mais bonito", "U","Quadro");
    var e: Produto = new Produto();
    e.create("Copo da barbie",  1,"Para você beber com estilo", "U","Copo"); 
    this.produtos = [a,b,c,d,e];
  }

  cadastrarProduto(produto: Produto){
    var check:boolean = false;
    for(let i = 0; i < this.produtos.length && !check;i++){
      if(produto.nome == this.produtos[i].nome){
        let qtd = this.produtos[i].getQuantidade();
        this.produtos[i].setQuantidade(qtd + 1);
        check = true;
      }
    }
    if(!check){
      this.produtos.push(produto);
    }
  }

  getProdutos(): Produto[] {
    return this.produtos;
  }

  getCategorias():string[] {
    let categorias: string[] = [];

    for (let i = 0; i < this.produtos.length; i++) {
      if(categorias.find(categoria => categoria == this.produtos[i].categoria.toUpperCase()) == undefined){
        categorias.push(this.produtos[i].categoria.toUpperCase());
      }
    }
    return categorias;
  }

  getProdutosByCategoria(categoria:string):Produto[]{
    return this.produtos.filter(produto => produto.categoria.toLowerCase() == categoria.toLowerCase());
  }

}
