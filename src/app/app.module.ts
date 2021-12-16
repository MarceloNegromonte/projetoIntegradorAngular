import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LoginComponent } from './login/login.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProdutoComponent } from './produto/produto.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    LoginComponent,
    CadastroClienteComponent,
    InicioComponent,
    ProdutoComponent,
    CategoriaComponent,
    ProdutoEditComponent,
    ProdutoDeleteComponent,
    CarrinhoComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
