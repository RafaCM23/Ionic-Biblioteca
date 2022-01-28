import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doc } from '../libros.interface'
import {Libros} from '../libros.interface'
@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private http: HttpClient) { }
  


  cargaBiblioteca(){
    
    const parametros = new HttpParams()
    .set('title','Narnia')
    .set('limit','10');

    return this.http.get<Libros>(`https://openlibrary.org/search.json`,{params:parametros});
  }
}
