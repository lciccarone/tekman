import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuarterDetailComponent } from './quarter-detail.component';

const routes: Routes = [
  {
    path: ':id',
    component: QuarterDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuarterDetailRoutingModule {}
