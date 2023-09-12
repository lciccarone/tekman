import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownPanelComponent } from './drop-down-panel.component';

@NgModule({
  declarations: [DropDownPanelComponent],
  exports: [DropDownPanelComponent],
  imports: [CommonModule]
})
export class DropDownPanelModule {}
