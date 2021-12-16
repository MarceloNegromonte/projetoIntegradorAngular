import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http' 
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

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){ // ISSO É UMA FUNÇÃO!
    this.token = {headers: new HttpHeaders().set('Authorization', environment.token)}
  }


  entrar(usuariologin: UsuarioLogin):  Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>('https://artemanha.herokuapp.com/usuario/logar', usuariologin)

  }
  getByIdUsuario(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://artemanha.herokuapp.com/usuario/logar/${id}`, this.token)
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
