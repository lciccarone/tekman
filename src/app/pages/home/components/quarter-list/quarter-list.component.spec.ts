import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterListComponent } from './quarter-list.component';
import { Router } from '@angular/router';

describe('QuarterListComponent', () => {
  let component: QuarterListComponent;
  let fixture: ComponentFixture<QuarterListComponent>;
  let router: Router;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuarterListComponent]
    });
    fixture = TestBed.createComponent(QuarterListComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to /about when About link is clicked', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.redirectToDetail(1);
    expect(navigateSpy).toHaveBeenCalledWith(['/quarter', 1], { queryParamsHandling: 'merge' });
  });
});
