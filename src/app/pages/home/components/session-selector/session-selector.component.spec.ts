import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SessionSelectorComponent } from './session-selector.component';
import { SessionInformation } from '../../../../core/models/quarter';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

describe('ReturnViewComponent', () => {
  let component: SessionSelectorComponent;
  let fixture: ComponentFixture<SessionSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [SessionSelectorComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(SessionSelectorComponent);
    component = fixture.componentInstance;
    component.quarters = [
      {
        id: 1,
        number: 1,
        sessionInformation: { sessions: [{ isLastView: true }] } as SessionInformation
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when component init', () => {
    it('should call findQuarterWithLastView and findLastSession', () => {
      const findQuarterWithLastViewSpy = spyOn<any>(component, 'findQuarterWithLastView');
      const findLastSessionSpy = spyOn<any>(component, 'findLastSession');
      component.ngOnInit();
      expect(findLastSessionSpy).toHaveBeenCalled();
      expect(findQuarterWithLastViewSpy).toHaveBeenCalled();
    });
  });
});
