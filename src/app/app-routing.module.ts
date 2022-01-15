import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent, MoviesListComponent } from './components';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesListComponent
  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent
  },
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
