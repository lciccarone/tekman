import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface Option {
  value: string;
  label: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() formControlNameSelect: string;
  @Input() form: FormGroup;
  @Input() label: string;
  @Input() options: Option[];
}
