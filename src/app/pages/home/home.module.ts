import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardModule } from '../../shared/components/card/card.module';
import { ButtonModule } from '../../shared/components/button/button.module';
import { SessionSelectorComponent } from './components/session-selector/session-selector.component';
import { QuarterListComponent } from './components/quarter-list/quarter-list.component';
import { QuarterCardModule } from '../../shared/components/quarter-card/quarter-card.module';

@NgModule({
  declarations: [HomeComponent, SessionSelectorComponent, QuarterListComponent],
  imports: [CommonModule, HomeRoutingModule, CardModule, ButtonModule, QuarterCardModule]
})
export class HomeModule {}
