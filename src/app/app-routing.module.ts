import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./pages/portfolio/portfolio.module').then((m) => m.PortfolioModule),
  },
  {
    path: 'aavegotchi-tracker',
    loadChildren: () =>
      import('./pages/aavegotchi-tracker/aavegotchi-tracker.module').then((m) => m.AavegotchiTrackerModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
