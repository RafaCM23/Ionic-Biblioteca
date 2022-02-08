import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibroService } from '../biblioteca/libro.service';
import { Doc } from '../libros.interface';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  existe: boolean = false;
  libro: Doc;

  constructor(private libroService : LibroService,private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.buscaLibro(); 
  }

  buscaLibro(){
    this.libroService.cargaLibro(this.activeRoute.snapshot.params["isbn"])
    .subscribe({
      next: resp =>{
        this.libro = resp.docs[0];
        this.existe = true;
      },
      error: e =>{
        console.log(e);
      }
    })
  }

}
