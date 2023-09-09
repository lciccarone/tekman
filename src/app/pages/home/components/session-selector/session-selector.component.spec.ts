import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionSelectorComponent } from './return-view.component';

describe('ReturnViewComponent', () => {
  let component: SessionSelectorComponent;
  let fixture: ComponentFixture<SessionSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessionSelectorComponent]
    });
    fixture = TestBed.createComponent(SessionSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
