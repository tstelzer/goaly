import {createSelector} from 'reselect'
import {values} from 'ramda'

import {StateSlice, Entities, AllIds, selectors} from 'common'
import {SetRep} from './set-reps-model'

export const getEntities: typeof selectors.getEntities = state =>
  selectors.getEntities(state)

export const getEntitiesList: typeof selectors.getEntitiesList = state =>
  selectors.getEntitiesList(state)

export const getIds: typeof selectors.getIds = state =>
  selectors.getIds(state)

export const getEntity: typeof selectors.getEntity = state =>
  selectors.getEntity(state)
