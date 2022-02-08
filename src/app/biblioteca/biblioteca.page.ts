import { Component, OnInit } from '@angular/core';
import { LibroService } from './libro.service';
import { Doc } from '../libros.interface'
import { Router } from '@angular/router';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {

  constructor(private libroService: LibroService, private router: Router) { }

  biblioteca : Doc[] = [];

  buscado:string="";
  ngOnInit() {
  }



  cargaLibros(){
    this.libroService.cargaBiblioteca(this.buscado)
    .subscribe(resp=>{
      this.biblioteca=resp.docs;
    },error=>{
      console.log(error);
    })
  }

 

}

