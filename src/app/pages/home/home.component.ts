import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Quarter } from '../../core/models/quarter';
import { select, Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { QuartersState } from '../../store/quarters/quarters.state';
import { selectLoading, selectQuarters } from '../../store/quarters/quarters.selectors';
import { getQuartersRequest } from '../../store/quarters/quarters.actions';
import { ConfigurationService } from '../../core/services/configuration.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public quarters$: Observable<Quarter[]>;
  public loading$: Observable<boolean>;
  public quarterWithLastSessionView: Quarter;
  private onDestroy$: Subject<boolean> = new Subject();

  constructor(
    private quartersState$: Store<QuartersState>,
    private configurationService: ConfigurationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.pipe(takeUntil(this.onDestroy$)).subscribe((queryParams) => {
      this.quartersState$.dispatch(getQuartersRequest({ course: queryParams['course'] ?? 1 }));
    });

    this.quarters$ = this.quartersState$.pipe(
      takeUntil(this.onDestroy$),
      select(selectQuarters),
      tap((quarters: Quarter[]) => {
        this.quarterWithLastSessionView = this.findQuarterWithLastSessionView(quarters);
      })
    );
    this.loading$ = this.quartersState$.pipe(takeUntil(this.onDestroy$), select(selectLoading));
  }

  public openConfiguration(): void {
    this.configurationService.toggleConfiguration(true);
  }

  private findQuarterWithLastSessionView(quarters: Quarter[]): Quarter {
    return quarters.find((quarter) => !!quarter.sessionInformation.sessions.find((session) => session.isLastView));
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
