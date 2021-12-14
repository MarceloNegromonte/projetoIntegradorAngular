import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  

  constructor() { }

    private router: Router
    private categoriaService: CategoriaService
    private produtoService: ProdutoService
    private authService: AuthService

  ngOnInit(){

    if(environment.token == ""){
      this.router.navigate(["/login"])
    }


  }

}
