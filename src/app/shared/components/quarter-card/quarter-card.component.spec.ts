import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterCardComponent } from './quarter-card.component';

describe('QuarterCardComponent', () => {
  let component: QuarterCardComponent;
  let fixture: ComponentFixture<QuarterCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuarterCardComponent]
    });
    fixture = TestBed.createComponent(QuarterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
