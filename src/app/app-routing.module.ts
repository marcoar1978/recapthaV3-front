import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pagina1Component } from './pagina1/pagina1.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path:'pagina1', component: Pagina1Component},
  {path:'', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
