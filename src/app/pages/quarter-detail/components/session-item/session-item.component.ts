import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Session, ViewStatus } from '../../../../core/models/quarter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.scss']
})
export class SessionItemComponent {
  @Input() session: Session;
  @Input() isSelected: boolean;
  @Output() clickEmitter: EventEmitter<number> = new EventEmitter<number>();
  protected readonly ViewStatus = ViewStatus;

  constructor(private router: Router) {}

  public selectSession(): void {
    this.clickEmitter.emit(this.session.number);
  }

  public playSession(): void {
    this.router.navigate(['/play', this.session.videosInformation.lastVideoSeen]);
  }

  public shuffleSession(): void {
    this.router.navigate(['/play', this.getRandomInteger(0, this.session.videosInformation.totalVideos)]);
  }

  private getRandomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
