import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationComponent } from './configuration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from '../dropdown/dropdown.module';
import { ButtonModule } from '../button/button.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ConfigurationComponent],
  exports: [ConfigurationComponent],
  imports: [CommonModule, ReactiveFormsModule, DropdownModule, ButtonModule, TranslateModule]
})
export class ConfigurationModule {}
