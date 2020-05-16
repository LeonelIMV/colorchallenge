import { Component, OnInit } from '@angular/core';
import { ColorService } from './../../servicios/color.service';
import { Color } from './../../modelos/color';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {
  colores: Color[] = [];
  page: string = '?page='
  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.getapidata();
  }

  getapidata() {
    this.colorService.getTotalPages().subscribe(
      res => {
        for (let index = 1; index <= parseInt(res.total_pages); index++) {
          let currentpage: string = this.page + index;
          this.addColors(currentpage);
        }
      }, err => { console.log(err) });
  }

  addColors(page: string) {
    this.colorService.getColor(page).subscribe(
      res => {
        console.log(res.data);
        res.data.forEach(color => {
          this.colores.push(color);
        });
      }, err => { console.log(err) })
  }
}
