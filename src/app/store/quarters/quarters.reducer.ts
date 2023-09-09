import { createReducer, on } from '@ngrx/store';
import { getQuartersRequest, getQuartersRequestFail, getQuartersRequestSuccess } from './quarters.actions';
import { initialState } from './quarters.state';

export const quartersReducer = createReducer(
  initialState,
  on(getQuartersRequest, (state) => {
    return {
      ...state,
      loading: true,
      error: null,
      quarters: []
    };
  }),
  on(getQuartersRequestSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      error: null,
      quarters: action.quarters
    };
  }),
  on(getQuartersRequestFail, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.payload
    };
  })
);
