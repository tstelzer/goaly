import {createSelector} from 'reselect'
import * as R from 'ramda'

import {Store} from 'app/store/store'

export const getSets = (state: Store) => state.model.entities.sets

export const getSetList = createSelector(
  getSets,
  sets => R.values(sets),
)

export const getSetIds = createSelector(
  getSets,
  sets => R.keys(sets),
)

