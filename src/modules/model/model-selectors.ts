import {createSelector} from 'reselect'
import * as R from 'ramda'

import {selectors as repetitionSelectors} from './repetition'
import {selectors as setSelectors} from './set'

export const getSetRepetitions = createSelector(
  repetitionSelectors.getRepetitions,
  setSelectors.getSets,
  (repetitions, sets) => undefined,
)
// export const repetitions = {
//   getIds: (state: Store) =>
//     selectors.getIds(state.repetitions),

//   getRepetition: (state: Store) =>
//     selectors.getEntity(state.repetitions),

//   getRepetitions: (state: Store) =>
//     selectors.getEntities(state.repetitions),

//   getRepetitionsList: (state: Store) =>
//     selectors.getEntitiesList(state.repetitions),
// }

// export const sets = {
//   getSets: (state: Store) =>
//     selectors.getEntities(state.sets),

//   getSetsList: (state: Store) =>
//     selectors.getEntitiesList(state.sets),

//   getSet: (state: Store) =>
//     selectors.getEntity(state.sets),
// }

// const getSelectedId = (state: Store) =>
//   state.repetitions.ui.selectedRepetition

// export const getSelected = (state: Store) =>
//   repetitions.getRepetition(state)(getSelectedId(state))
