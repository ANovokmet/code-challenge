import { createSelector } from '@ngrx/store';

import { State, RootState } from './root.state';

export const selectState = (state: RootState) => state.root;

export const selectToken = createSelector(selectState, (state: State) => state.token);
export const selectInput = createSelector(selectState, (state: State) => state.input);
export const selectResult = createSelector(selectState, (state: State) => state.result);
export const selectError = createSelector(selectState, (state: State) => state.error);
