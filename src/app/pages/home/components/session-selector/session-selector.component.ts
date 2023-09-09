import { Component, Input, OnInit } from '@angular/core';
import { Quarter, Session } from '../../../../core/models/quarter';

@Component({
  selector: 'app-session-selector',
  templateUrl: './session-selector.component.html',
  styleUrls: ['./session-selector.component.scss']
})
export class SessionSelectorComponent implements OnInit {
  @Input() quarters: Quarter[];
  lastSession: Session;
  lastQuarter: Quarter;

  ngOnInit(): void {
    this.findQuarterWithLastView();
    this.findLastSession();
  }

  private findQuarterWithLastView() {
    this.lastQuarter = this.quarters.find(quarter => !!quarter.sessionInformation.sessions.find(session => session.isLastView));
  }

  private findLastSession() {
    this.lastSession = this.lastQuarter.sessionInformation.sessions.find(session => session.isLastView);
  }
}
