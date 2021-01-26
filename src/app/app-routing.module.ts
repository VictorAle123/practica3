import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstComponent} from './first/first.component'
import {SecondComponent} from './second/second.component'
import { NotFoundComponent } from './not-found/not-found.component';
import { CompruebaedadGuard } from './Guards/compruebaedad.guard'

const routes: Routes = [
  {path: 'formulario1/:id', component: FirstComponent, canActivate:[CompruebaedadGuard]},
  {path: 'formulario2', component: SecondComponent, canActivate:[CompruebaedadGuard]},
  {path: '**', component: NotFoundComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }