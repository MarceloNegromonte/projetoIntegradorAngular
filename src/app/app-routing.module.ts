import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroEmpreededorComponent } from './cadastro-empreededor/cadastro-empreededor.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"", redirectTo: "login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path:"cadastro-cliente", component: CadastroClienteComponent},
  {path:'cadastro-empreededor',component: CadastroEmpreededorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
