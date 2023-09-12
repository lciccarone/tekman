import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() toggleConfigurationEmitter: EventEmitter<void> = new EventEmitter<void>();

  emitToggleConfiguration(): void {
    this.toggleConfigurationEmitter.emit();
  }
}
