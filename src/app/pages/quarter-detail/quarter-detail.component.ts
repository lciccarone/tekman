import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { QuartersState } from '../../store/quarters/quarters.state';
import { getQuartersRequest } from '../../store/quarters/quarters.actions';
import { map, takeUntil } from 'rxjs/operators';
import { selectLoading, selectQuarters } from '../../store/quarters/quarters.selectors';
import { Observable, Subject } from 'rxjs';
import { Quarter } from '../../core/models/quarter';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quarter-detail',
  templateUrl: './quarter-detail.component.html',
  styleUrls: ['./quarter-detail.component.scss']
})
export class QuarterDetailComponent implements OnInit, OnDestroy {
  public quarter$: Observable<Quarter>;
  public loading$: Observable<boolean>;
  private onDestroy$: Subject<boolean> = new Subject();

  constructor(
    private route: ActivatedRoute,
    private quartersState$: Store<QuartersState>
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const course = this.route.snapshot.queryParams['course'];
    this.quartersState$.dispatch(getQuartersRequest({ course, id }));
    this.quarter$ = this.quartersState$.pipe(
      takeUntil(this.onDestroy$),
      select(selectQuarters),
      map((quarter) => quarter[0])
    );
    this.loading$ = this.quartersState$.pipe(takeUntil(this.onDestroy$), select(selectLoading));
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
