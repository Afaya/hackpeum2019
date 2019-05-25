import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
    }
  },
  {
    path: 'game',
    component: GameComponent,
    data: {
    }
  },
  {
    path: 'results',
    component: ResultsComponent,
    data: {
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
