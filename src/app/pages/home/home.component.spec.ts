import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { provideMockStore } from '@ngrx/store/testing';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationService } from '../../core/services/configuration.service';
import createSpyObj = jasmine.createSpyObj;
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let configurationServiceSpy: jasmine.SpyObj<ConfigurationService>;
  const activatedRouteStub = {
    queryParams: of()
  };
  beforeEach(() => {
    configurationServiceSpy = createSpyObj('ConfigurationService', ['toggleConfiguration']);
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [HomeComponent],
      providers: [
        {
          provide: ConfigurationService,
          useValue: configurationServiceSpy
        },
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        provideMockStore({})
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when open configuration', () => {
    it('should call toggleConfiguration', () => {
      configurationServiceSpy.toggleConfiguration.and.returnValue();
      component.openConfiguration();
      expect(configurationServiceSpy.toggleConfiguration).toHaveBeenCalled();
    });
  });
});
