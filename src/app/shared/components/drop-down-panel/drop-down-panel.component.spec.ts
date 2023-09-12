import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownPanelComponent } from './drop-down-panel.component';

describe('DropDownPanelComponent', () => {
  let component: DropDownPanelComponent;
  let fixture: ComponentFixture<DropDownPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropDownPanelComponent]
    });
    fixture = TestBed.createComponent(DropDownPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
