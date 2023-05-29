import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { PokemonDetailPageComponent } from './pages/pokemon-detail-page/pokemon-detail-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pokemon'
  },

  {
    path: 'pokemon',
    component: PokemonPageComponent
  }, {
    path: 'pokemon/:name',
    component: PokemonDetailPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
