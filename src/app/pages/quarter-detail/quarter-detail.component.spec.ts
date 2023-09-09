import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterDetailComponent } from './quarter-detail.component';

describe('QuarterDetailComponent', () => {
  let component: QuarterDetailComponent;
  let fixture: ComponentFixture<QuarterDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuarterDetailComponent]
    });
    fixture = TestBed.createComponent(QuarterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
