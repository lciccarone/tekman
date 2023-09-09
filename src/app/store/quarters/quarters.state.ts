import { Quarter } from '../../core/models/quarter';

export interface QuartersState {
  loading: boolean;
  error?: any;
  quarters?: Quarter[];
}

export const initialState: QuartersState = {
  loading: false
};
