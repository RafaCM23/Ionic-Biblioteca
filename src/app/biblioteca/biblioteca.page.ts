import { Component, OnInit } from '@angular/core';
import { LibroService } from './libro.service';
import { Doc } from '../libros.interface'

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {

  constructor(private libroService: LibroService) { }

  biblioteca : Doc[] = [];
  ngOnInit() {
    this.buscaLibros();
  }



  prueba(){
    console.log("funciona")
  }
 

  buscaLibros(){
    this.libroService.cargaBiblioteca()
    .subscribe(resp=>{
      this.biblioteca=resp.docs;
      console.log(this.biblioteca)
    },error=>{
      console.log(error);
    })
  }



}

