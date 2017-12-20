import {createSelector} from 'reselect'
import * as R from 'ramda'

import {Store} from 'app/store/store'

export const getEntities = (state: Store) => state.model.sets.entities
export const getAllIds = (state: Store) => state.model.sets.result

/**
 * Selects array of sets with retained order of ids.
 */
export const getSetList = createSelector(
  getAllIds,
  getEntities,
  (ids, entities) => ids.map(id => R.prop(id, entities)),
)

export const getSet = createSelector(
  getEntities,
  entities => R.memoize(id => R.prop(id, entities)),
)

