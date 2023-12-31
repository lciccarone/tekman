import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuarterCardComponent } from './quarter-card.component';
import { PieChartModule } from '../pie-chart/pie-chart.module';
import { CardModule } from '../card/card.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [QuarterCardComponent],
  exports: [QuarterCardComponent],
  imports: [CommonModule, PieChartModule, CardModule, TranslateModule]
})
export class QuarterCardModule {}
