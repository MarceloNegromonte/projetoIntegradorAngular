import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoService } from './service/produto.service';

const routes: Routes = [
  {path:"", redirectTo: "inicio", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path:"cadastro", component: CadastroClienteComponent},
  {path:"inicio", component: InicioComponent},
  {path:"produto", component: ProdutoComponent},
  {path:"categoria", component: CategoriaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
