import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmCreateComponent } from './components/film-create/film-create.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { FilmListComponent } from './components/film-list/film-list.component';

// Nous devons mettre dans Routes = [] les différents path
//pathMatch:'full' précise que ça doit être strictement exacte au path donc dans ce cas ci RIEN
const routes: Routes = [
  {path:'', redirectTo:'list', pathMatch : 'full'},
  {path:'list', component : FilmListComponent},
  {path:'details/:id', component : FilmDetailsComponent},
  {path:'create', component : FilmCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
