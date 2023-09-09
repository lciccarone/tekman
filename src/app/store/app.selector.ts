import { createSelector } from '@ngrx/store';
import { selectAppState } from './index';

export const selectQuarters = createSelector(
  selectAppState,
  (state) => state.quarters
);
