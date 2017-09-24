import {keys} from 'ramda'

import {StateSlice, StoreSlice, selectors} from 'modules/core'
import {Store} from 'modules/main/store-types'
import {model as setRepsModel} from 'modules/set-reps/'

export const setReps = {
  getIds: (state: Store) => selectors.getIds(state['setReps']),
  getEntity: (state: Store) => selectors.getEntity(state['setReps']),
  getEntities: (state: Store) => selectors.getEntities(state['setReps']),
  getEntitiesList: (state: Store) => selectors.getEntitiesList(state['setReps']),
}
