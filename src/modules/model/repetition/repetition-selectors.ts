import {createSelector} from 'reselect'
import * as R from 'ramda'

import {Store} from 'app/store/store'

export const getRepetitions = (state: Store) => state.model.repetitions.entities

export const getRepetitionList = createSelector(
  getRepetitions,
  repetitions => R.values(repetitions),
)

export const getRepetitionIds = createSelector(
  getRepetitions,
  repetitions => R.keys(repetitions),
)
