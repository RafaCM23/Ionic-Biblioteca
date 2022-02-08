import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Libros} from '../libros.interface'
@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private http: HttpClient) { }
  


  cargaBiblioteca(buscado){
    
    const parametros = new HttpParams()
    .set('title',buscado)
    .set('limit','10');

    return this.http.get<Libros>(`https://openlibrary.org/search.json`,{params:parametros});
  }

  cargaLibro(isbn){
    const parametros= new HttpParams()
    .set('isbn',isbn)
    return this.http.get<Libros>(`https://openlibrary.org/search.json`,{params:parametros});
  }
}
