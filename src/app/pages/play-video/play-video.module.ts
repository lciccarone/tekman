import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayVideoRoutingModule } from './play-video-routing.module';
import { PlayVideoComponent } from './play-video.component';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from '../../shared/components/button/button.module';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [PlayVideoComponent],
  imports: [CommonModule, PlayVideoRoutingModule, TranslateModule, ButtonModule, MarkdownModule]
})
export class PlayVideoModule {}
