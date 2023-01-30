import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {EstadisticasComponent} from "./pages/estadisticas/estadisticas.component";
import {ArticulosComponent} from "./pages/articulos/articulos.component";
import {DialogComponent} from "./dialog/dialog/dialog.component";

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'estadisticas', component: EstadisticasComponent},
  {path: 'articulos', component:ArticulosComponent},
  {path: 'dialog', component:DialogComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
