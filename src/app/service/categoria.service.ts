import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  categoria: Categoria = new Categoria();

  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  getAllCategoria(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(
      'https://artemanha.herokuapp.com/categoria'
    );
  }

  getByIdCategoria(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(
      `https://artemanha.herokuapp.com/categoria/${id}`
    );
  }

  postCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(
      'https://artemanha.herokuapp.com/categoria',
      categoria,
      this.token
    );
  }

  putCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(
      'https://artemanha.herokuapp.com/categoria',
      categoria,
      this.token
    );
  }

  deleteCategoria(id: number) {
    return this.http.delete(
      `https://artemanha.herokuapp.com/categoria/${id}`,
      this.token
    );
  }
}
