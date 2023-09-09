import { Injectable } from '@angular/core';
import { catchError, map, switchMap, takeUntil } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getQuartersRequest,
  getQuartersRequestCancel,
  getQuartersRequestFail,
  getQuartersRequestSuccess
} from './quarters.actions';
import { QuarterService } from '../../core/services/quarter.service';
import { Quarter } from '../../core/models/quarter';

@Injectable()
export class QuartersEffects {
  constructor(
    private actions$: Actions,
    private quarterService: QuarterService
  ) {}

  getQuarters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getQuartersRequest),
      switchMap((action) =>
        this.quarterService.getQuarters(action.id).pipe(
          takeUntil(this.actions$.pipe(ofType(getQuartersRequestCancel))),
          map((quarters: Quarter[]) => getQuartersRequestSuccess({ quarters })),
          catchError((error) => getQuartersRequestFail(error))
        )
      )
    )
  );
}
