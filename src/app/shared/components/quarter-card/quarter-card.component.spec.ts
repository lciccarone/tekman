import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterCardComponent } from './quarter-card.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Quarter, SessionInformation } from '../../../core/models/quarter';

describe('QuarterCardComponent', () => {
  let component: QuarterCardComponent;
  let fixture: ComponentFixture<QuarterCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [QuarterCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(QuarterCardComponent);
    component = fixture.componentInstance;
    component.quarter = { sessionInformation: {} as SessionInformation } as Quarter;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
