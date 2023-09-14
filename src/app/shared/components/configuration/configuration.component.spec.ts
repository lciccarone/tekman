import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationComponent } from './configuration.component';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfigurationService } from '../../../core/services/configuration.service';
import createSpyObj = jasmine.createSpyObj;
import { TranslateModule } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ConfigurationComponent', () => {
  let component: ConfigurationComponent;
  let fixture: ComponentFixture<ConfigurationComponent>;
  let configurationServiceSpy: jasmine.SpyObj<ConfigurationService>;
  let router: Router;

  const activatedRouteStub = {
    queryParams: of()
  };
  beforeEach(() => {
    configurationServiceSpy = createSpyObj('ConfigurationService', ['toggleConfiguration']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule.forRoot()],
      declarations: [ConfigurationComponent],
      providers: [
        {
          provide: ConfigurationService,
          useValue: configurationServiceSpy
        },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(ConfigurationComponent);
    router = TestBed.inject(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when updateConfig is called', () => {
    it('should set query params and call ', () => {
      const closeConfigurationSpy = spyOn(component, 'closeConfiguration').and.callThrough();
      const navigateSpy = spyOn(router, 'navigate');
      component.updateConfig();
      expect(navigateSpy).toHaveBeenCalled();
      expect(closeConfigurationSpy).toHaveBeenCalled();
      expect(configurationServiceSpy.toggleConfiguration).toHaveBeenCalled();
    });
  });
});
