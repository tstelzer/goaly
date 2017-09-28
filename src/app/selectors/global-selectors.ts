import {keys} from 'ramda'
import {createSelector} from 'reselect'

import {StateSlice, StoreSlice, selectors} from 'modules/core'
import {Store} from 'app/store/store-types'
import {model as repsModel} from 'modules/repetitions/'

export const repetitions = {
  getIds: (state: Store) =>
    selectors.getIds(state['repetitions']),

  getRepetition: (state: Store) =>
    selectors.getEntity(state['repetitions']),

  getRepetitions: (state: Store) =>
    selectors.getEntities(state['repetitions']),

  getRepetitionsList: (state: Store) =>
    selectors.getEntitiesList(state['repetitions']),
}
