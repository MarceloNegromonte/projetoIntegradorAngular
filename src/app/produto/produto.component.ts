import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AuthService } from '../service/auth.service';
import { CarrinhoService } from '../service/carrinho.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',

  styleUrls: ['./produto.component.css'],
})
export class ProdutoComponent implements OnInit {
  produto: Produto = new Produto();
  listaProdutos: Produto[];

  idProduto:number
  listaCategoria: Categoria[];

  constructor(private router: Router, 
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private carrinhoService: CarrinhoService,
    private auth: AuthService ) {}

  ngOnInit() {
    this.findAllProdutos();
  }

  findAllProdutos() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp;
    });
  }

  cadastraProdutos() {
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp;
      alert('Cadastrasse o tema foi, fi da febi? parabéns murrinha!');
      this.findAllProdutos();
      this.produto = new Produto();
    });
  }

  getProdutoById(id:number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp;
      this.adicionarProduto()
    }) 
  }

  adicionarProduto(){
    this.carrinhoService.adicionar(this.produto)
    console.log(this.carrinhoService.produtos)
  }
}
