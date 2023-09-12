import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((module) => module.HomeModule)
  },
  {
    path: 'quarter',
    loadChildren: () =>
      import('./pages/quarter-detail/quarter-detail.module').then((module) => module.QuarterDetailModule)
  },
  {
    path: 'play',
    loadChildren: () => import('./pages/play-video/play-video.module').then((module) => module.PlayVideoModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
