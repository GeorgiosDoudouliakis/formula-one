/* Place angular imports */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'standings',
    loadChildren: () => import('./modules/standings/standings.module').then(m => m.StandingsModule)
  },
  {
    path: 'drivers',
    loadChildren: () => import('./modules/drivers/drivers.module').then(m => m.DriversModule)
  },
  {
    path: 'constructors',
    loadChildren: () => import('./modules/constructors/constructors.module').then(m => m.ConstructorsModule)
  },
  {
    path: 'circuits',
    loadChildren: () => import('./modules/circuits/circuits.module').then(m => m.CircuitsModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./modules/schedule/schedule.module').then(m => m.ScheduleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: "enabled"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
