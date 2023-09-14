import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionItemComponent } from './session-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { VideosInformation, ViewStatus } from '../../../../core/models/quarter';
import { Router } from '@angular/router';

describe('SessionItemComponent', () => {
  let component: SessionItemComponent;
  let fixture: ComponentFixture<SessionItemComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SessionItemComponent]
    });
    fixture = TestBed.createComponent(SessionItemComponent);
    router = TestBed.inject(Router);

    component = fixture.componentInstance;
    component.session = {
      number: 1,
      isLastView: false,
      videosInformation: {} as VideosInformation,
      status: ViewStatus.SEEN,
      name: ''
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when selectSession is called', () => {
    it('should emit', () => {
      const emitterSpy = spyOn(component.clickEmitter, 'emit');
      component.selectSession();
      expect(emitterSpy).toHaveBeenCalled();
    });
  });

  describe('when playSession is called', () => {
    it('should emit', () => {
      const navigateSpy = spyOn(router, 'navigate');
      component.playSession();
      expect(navigateSpy).toHaveBeenCalled();
    });
  });

  describe('when shuffleSession is called', () => {
    it('should emit', () => {
      const navigateSpy = spyOn(router, 'navigate');
      const getRandomIntegerSpy = spyOn<any>(component, 'getRandomInteger');
      component.shuffleSession();
      expect(navigateSpy).toHaveBeenCalled();
      expect(getRandomIntegerSpy).toHaveBeenCalled();
    });
  });
});
