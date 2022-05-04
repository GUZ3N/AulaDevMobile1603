import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.page.html',
  styleUrls: ['./curso.page.scss'],
})
export class CursoPage implements OnInit {

  cursos: any[] =[
    {name: 'Administração', valor: 1, marcado: false},
    {name: 'Agronomia', valor: 2, marcado: false},
    {name: 'Análise e Desenvolvimento de Sistemas', valor: 3, marcado: true},
    {name: 'Arquitetura e Urbanismo', valor: 4, marcado: false},
    {name: 'Biomedicina', valor: 5, marcado: false},
    {name: 'Ciências Biológicas', valor: 6, marcado: true},
    {name: 'Ciências Contábeis', valor: 7, marcado: false},
    {name: 'Direito', valor: 8, marcado: false},
    {name: 'Educação Física', valor: 9, marcado: false},
    {name: 'Enfermagem', valor: 10, marcado: true},
  ];

  constructor() { }

  ngOnInit() {
  }

  showCursos(){
    this.cursos.forEach(value => {
      if (value.marcado){
        console.log(value);
      }
    });
  }

}
