import { Component, Input } from '@angular/core';
import { Quarter } from '../../../core/models/quarter';

@Component({
  selector: 'app-quarter-card',
  templateUrl: './quarter-card.component.html',
  styleUrls: ['./quarter-card.component.scss']
})
export class QuarterCardComponent {
  @Input() quarter: Quarter;
}
