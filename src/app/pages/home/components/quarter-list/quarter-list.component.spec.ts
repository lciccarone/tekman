import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterListComponent } from './quarter-list.component';

describe('QuarterListComponent', () => {
  let component: QuarterListComponent;
  let fixture: ComponentFixture<QuarterListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuarterListComponent]
    });
    fixture = TestBed.createComponent(QuarterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
