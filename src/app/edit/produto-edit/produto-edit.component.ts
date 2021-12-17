import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Produto } from 'src/app/model/Produto';
import { Usuario } from 'src/app/model/Usuario';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css'],
})
export class ProdutoEditComponent implements OnInit {
  listaCategoria: Categoria[];
  categoria: Categoria = new Categoria();
  idCategoria: number;


  produto: Produto = new Produto();

  idUser = environment.id
  usuario: Usuario = new Usuario()

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);

    if (environment.token == '') {
      this.router.navigate(['/login']);
    }

    let id = this.route.snapshot.params['id'];
    this.findAllCategoria();
    this.findByIdProduto(id);
  }

  findAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp;
    });
  }

  findCategoriaById() {
    this.categoriaService
      .getByIdCategoria(this.idCategoria)
      .subscribe((resp: Categoria) => {
        this.categoria = resp;
      });
  }

  findByIdProduto(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp;
    });
  }

  atualizar() {
    this.categoria.id = this.idCategoria;
    this.produto.categoria = this.categoria;

    this.usuario.id = this.idUser
    this.produto.usuario = this.usuario

    console.log(this.produto)

    this.produtoService.putProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp;
      alert('Seu produto foi atualizado com sucesso! 👏');
      this.router.navigate(['/produto']);
    });
  }
}
