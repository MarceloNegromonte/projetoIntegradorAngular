import { Injectable } from '@angular/core';
import  {HttpClient} from  '@angular/common/http' 
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    
    private http: HttpClient

  ) { }

  entrar(usuariologin: UsuarioLogin):  Observable<UsuarioLogin> {

    return this.http.post<UsuarioLogin>('https://artemanha.herokuapp.com/usuario/logar', usuariologin)

  }
  
  cadastrar(usuario: Usuario): Observable<Usuario>{
    
    
    return this.http.post<Usuario>('https://artemanha.herokuapp.com/usuario/cadastrar', usuario)
  
  
  }
  logado(){
    
        let ok: boolean = false
    
        if(environment.token != ''){
          ok = true
        }
    
        return ok
      }
    
  

}
