import { Component, Input } from '@angular/core';
import { Quarter } from '../../../../core/models/quarter';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent {
  @Input() quarter: Quarter;
  public sessionSelected: number;

  selectSession(session: number): void {
    this.sessionSelected = session;
  }
}
