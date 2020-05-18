import { Component, OnInit, Input } from '@angular/core';
import { Color } from './../../modelos/color';

@Component({
  selector: 'app-color-copiado',
  templateUrl: './color-copiado.component.html',
  styleUrls: ['./color-copiado.component.css']
})
export class ColorCopiadoComponent implements OnInit {

  @Input() colorCopiado: Color = null;

  constructor() { }

  ngOnInit(): void {
  }

}
