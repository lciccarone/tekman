import { Component, Input } from '@angular/core';
import { Quarter } from '../../../../core/models/quarter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quarter-list',
  templateUrl: './quarter-list.component.html',
  styleUrls: ['./quarter-list.component.scss']
})
export class QuarterListComponent {
  @Input() quarters: Quarter[];

  constructor(private router: Router) {}

  redirectToDetail(id: number): void {
    this.router.navigate(['/quarter', id]);
  }
}
