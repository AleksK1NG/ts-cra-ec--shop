import { createSelector } from 'reselect'
import { AppState } from '../../rootReducer'

// Selectors

export const directoryStateSelector = (state: AppState) => state.directory

export const sectionsSelector = createSelector(
  directoryStateSelector,
  (state) => state.sections
)
