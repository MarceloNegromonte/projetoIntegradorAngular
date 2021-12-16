import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
})
export class CategoriaComponent implements OnInit {
  categoria: Categoria = new Categoria();
  listaCategoria: Categoria[];
  idCat: number;

  produto: Produto = new Produto();

  usuario: Usuario = new Usuario();

  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService
  ) {}

  ngOnInit() {
    this.categoriaService.refreshToken();
    this.produtoService.refreshToken();
    this.findAllCategoria();
  }

  findAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp;
    });
  }

  findCategoriaById() {
    this.categoriaService
      .getByIdCategoria(this.idCat)
      .subscribe((resp: Categoria) => {
        this.categoria = resp;
      });
  }

  cadastrarCategoria() {
    this.categoriaService
      .postCategoria(this.categoria)
      .subscribe((resp: Categoria) => {
        this.categoria = resp;
        alert('categoria criada');
        this.categoria = new Categoria();
      });
  }

  cadastrarProduto() {
    this.categoria.id = this.idCat;
    this.produto.categoria = this.categoria;

    this.usuario.id = environment.id;
    this.produto.usuario = this.usuario;

    console.log(this.produto);

    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp;
      alert('produto cadastrado');
      this.produto = new Produto();
    });
  }
}
