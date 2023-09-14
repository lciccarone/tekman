import { TestBed } from '@angular/core/testing';

import { QuarterService } from './quarter.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('QuarterService', () => {
  let service: QuarterService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(QuarterService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when asdsdad is called', () => {
    it('should retrieve quarters with optional parameters', () => {
      const course = 1;
      const id = 1;

      service.getQuarters(course, id).subscribe((quarters) => {
        expect(quarters).toEqual(undefined);
      });
    });
  });
});
