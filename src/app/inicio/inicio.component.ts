import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { threadId } from 'worker_threads';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[]
  idProduto: number

  categoria: Categoria = new Categoria()
  listaCategoria: Categoria[]
  idCategoria: number

  usuario: Usuario = new Usuario()
  idUsuario = environment.id

  constructor() { }

    private router: Router
    private categoriaService: CategoriaService
    private produtoService: ProdutoService
    private authService: AuthService

  ngOnInit(){
    window.scroll(0,0)
    
    if(environment.token == ""){
      this.router.navigate(["/login"])
    }

    this.authService.refreshToken()
    this.getAllProdutos()
    //ERROR
    //this.getAllCategorias()

    
  }

  getAllProdutos(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[])=>{
      this.listaProdutos = resp
    })

  }

  findByIdProduto(){
    this.produtoService.getByIdProduto(this.idProduto).subscribe((resp: Produto)=>{
      this.produto = resp
    })
  }

  //ERROR
  /*getAllCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
      this.listaCategoria = resp
    })
  }*/

  findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria)=>{
      this.categoria = resp
    })
    
  }

  findByIdUsuario(){
    this.authService.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario)=>{
      this.usuario = resp
    })
  }

  //ERROR
  /*publicarProduto(){
    this.produto.id = this.idProduto
    this.categoria.produto = this.produto

    this.usuario
    
  }*/
}