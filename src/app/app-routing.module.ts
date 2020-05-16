import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorCopiadoComponent } from './components/color-copiado/color-copiado.component'
import { ColoresComponent } from './components/colores/colores.component'


const routes: Routes = [
  { path: '', component: ColoresComponent },
  { path: 'colores', component: ColoresComponent },
  { path: 'colorCopiado', component: ColorCopiadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
