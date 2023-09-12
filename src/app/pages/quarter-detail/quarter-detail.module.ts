import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuarterDetailRoutingModule } from './quarter-detail-routing.module';
import { QuarterDetailComponent } from './quarter-detail.component';
import { QuarterCardModule } from '../../shared/components/quarter-card/quarter-card.module';
import { CardModule } from '../../shared/components/card/card.module';
import { SessionListComponent } from './components/session-list/session-list.component';
import { SessionItemComponent } from './components/session-item/session-item.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [QuarterDetailComponent, SessionListComponent, SessionItemComponent],
  imports: [CommonModule, QuarterDetailRoutingModule, QuarterCardModule, CardModule, TranslateModule]
})
export class QuarterDetailModule {}
