import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuarterDetailComponent } from './quarter-detail.component';
import { TranslateModule } from '@ngx-translate/core';
import { ConfigurationService } from '../../core/services/configuration.service';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import createSpyObj = jasmine.createSpyObj;

describe('QuarterDetailComponent', () => {
  let component: QuarterDetailComponent;
  let fixture: ComponentFixture<QuarterDetailComponent>;
  let configurationServiceSpy: jasmine.SpyObj<ConfigurationService>;
  const activatedRouteStub = {
    snapshot: {
      paramMap: convertToParamMap({ id: '123' }),
      queryParams: convertToParamMap({ course: '123' })
    }
  };
  beforeEach(() => {
    configurationServiceSpy = createSpyObj('ConfigurationService', ['toggleConfiguration']);
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [QuarterDetailComponent],
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
    fixture = TestBed.createComponent(QuarterDetailComponent);
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
