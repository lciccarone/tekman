import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionListComponent } from './session-list.component';
import { SessionInformation } from '../../../../core/models/quarter';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let fixture: ComponentFixture<SessionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [SessionListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    component.quarter = {
      id: 1,
      number: 1,
      sessionInformation: {} as SessionInformation
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when selectSession is called', () => {
    it('should sessionSelected set value', () => {
      component.selectSession(1);
      expect(component.sessionSelected).toBeTruthy();
    });
  });
});
