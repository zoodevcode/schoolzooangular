import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';

const routes: Routes = [
  // Autres routes de votre application
  { path: 'formulaire', component: FormulaireComponent }, // Définissez la route pour le formulaire

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
