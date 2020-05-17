import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ColorService } from './../../servicios/color.service';
import { Color } from './../../modelos/color';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {
  colores: Color[] = [];
  SublistaColores: Color[] = [];
  page: string = '?page='
  p: number = 1;
  paginaActualPAginador: number = 1;

  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.getapidata();
  }

  getapidata(): void {
    this.colorService.getTotalPages().subscribe(
      res => {
        for (let index = 1; index <= parseInt(res.total_pages); index++) {
          let currentpage: string = this.page + index;
          this.addColors(currentpage);
        }
      }, err => { console.log(err) });
  }

  addColors(page: string): void {
    this.colorService.getColor(page).subscribe(
      res => {
        console.log(res.data);
        res.data.forEach(color => {
          this.colores.push(color);
        });
      }, err => { console.log(err) })
  }

  paginaSiguente(): void {
    let paginaSiguiente: number = this.p + 1;
    let paginasTotales: number = this.paginasTotales();
    if (paginasTotales > this.p) {
      this.p++;
    }
  }

  paginaAnterior(): void {
    let paginaAnterior = this.p - 1;
    if (paginaAnterior > 0) {
      this.p--;
    }
  }

  paginasTotales(): number {
    let totalPaginas: number = 0;;
    if (this.colores.length % 9 == 0) {
      totalPaginas = this.colores.length / 9;
      console.log(totalPaginas);
    } else {
      let numeroTruncado: number = Math.trunc(this.colores.length / 9);
      totalPaginas = numeroTruncado + 1;
      console.log(totalPaginas);
    }
    return totalPaginas;
  }
}
