import { TestBed } from '@angular/core/testing';

import { ConfigurationService } from './configuration.service';

describe('ConfigurationService', () => {
  let service: ConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should toggle configuration', () => {
    let currentConfiguration: boolean | undefined;
    service.configuration$.subscribe((value) => {
      currentConfiguration = value;
    });
    service.toggleConfiguration(true);
    expect(currentConfiguration).toBe(true);
  });
});
