import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { quartersReducer } from './quarters/quarters.reducer';
import { QuartersState } from './quarters/quarters.state';

export interface AppState {
  quarters: QuartersState;
}

export const reducers: ActionReducerMap<AppState> = {
  quarters: quartersReducer
};

export const selectAppState = createFeatureSelector<AppState>('appFeature');
