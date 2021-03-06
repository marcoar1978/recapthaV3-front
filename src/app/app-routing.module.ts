import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pagina1Component } from './pagina1/pagina1.component';
import { FormComponent } from './form/form.component';
import { FormModalComponent } from './form-modal/form-modal.component';

const routes: Routes = [
  {path:'pagina1', component: Pagina1Component},
  {path:'modal', component: FormModalComponent},
  {path:'', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
