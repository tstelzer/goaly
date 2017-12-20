import {createSelector} from 'reselect'
import * as R from 'ramda'

import {Store} from 'app/store/store-types'

export const getEntities = (state: Store) => state.model.repetitions.entities
export const getAllIds = (state: Store) => state.model.repetitions.result

/**
 * Selects array of repetitions with retained order of ids.
 */
export const getRepetitionList = createSelector(
  getAllIds,
  getEntities,
  (ids, entities) => ids.map(id => R.prop(id, entities)),
)

export const getRepetition = createSelector(
  getEntities,
  entities => R.memoize(id => R.prop(id, entities)),
)
