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
import { CadastroEmpreededorComponent } from './cadastro-empreededor/cadastro-empreededor.component';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    
    RodapeComponent,
    
    LoginComponent,
    
    CadastroClienteComponent,
    CadastroEmpreededorComponent,
    InicioComponent,
    
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
