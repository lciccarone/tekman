import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ConfigurationService } from './core/services/configuration.service';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let configurationServiceSpy: jasmine.SpyObj<ConfigurationService>;
  let translateServiceSpy: jasmine.SpyObj<TranslateService>;
  let activatedRouteStub: Partial<ActivatedRoute>;

  beforeEach(() => {
    configurationServiceSpy = jasmine.createSpyObj('ConfigurationService', ['toggleConfiguration']);
    translateServiceSpy = jasmine.createSpyObj('TranslateService', ['addLangs', 'use']);
    activatedRouteStub = {
      queryParams: of({ language: 'es' })
    };

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: ConfigurationService, useValue: configurationServiceSpy },
        { provide: TranslateService, useValue: translateServiceSpy },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should set the default language', () => {
    fixture.detectChanges();
    expect(translateServiceSpy.addLangs).toHaveBeenCalledWith(['en', 'es']);
    expect(translateServiceSpy.use).toHaveBeenCalledWith('es');
  });

  it('should subscribe to configurationService and set isConfigurationOpen$', () => {
    const configurationObservable = of(true);

    configurationServiceSpy.configuration$ = configurationObservable as Observable<boolean>;
    fixture.detectChanges();
    expect(component.isConfigurationOpen$).toBe(configurationObservable);
  });
});
