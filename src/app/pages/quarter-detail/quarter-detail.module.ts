import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuarterDetailRoutingModule } from './quarter-detail-routing.module';
import { QuarterDetailComponent } from './quarter-detail.component';
import { QuarterCardModule } from '../../shared/components/quarter-card/quarter-card.module';

@NgModule({
  declarations: [QuarterDetailComponent],
  imports: [CommonModule, QuarterDetailRoutingModule, QuarterCardModule]
})
export class QuarterDetailModule {}
