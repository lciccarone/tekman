import { createAction, props } from '@ngrx/store';

export const getQuartersRequest = createAction(
  '[Quarters] Get quarters request',
  props<any>()
);
export const getQuartersRequestSuccess = createAction(
  '[Quarters] Get quarters request success',
  props<any>()
);
export const getQuartersRequestFail = createAction(
  '[Quarters] Get quarters request fail',
  props<any>()
);

export const getQuartersRequestCancel = createAction(
  '[Quarters] Get quarters request cancel'
);
