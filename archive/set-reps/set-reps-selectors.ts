import {createSelector} from 'reselect'
import {values} from 'ramda'

import {StateSlice, ById, AllIds, selectors} from 'modules/core'
import {SetRep} from './set-reps-model'

export const getEntities: typeof selectors.getEntities = state =>
  selectors.getEntities(state)

export const getEntitiesList: typeof selectors.getEntitiesList = state =>
  selectors.getEntitiesList(state)

export const getIds: typeof selectors.getIds = state =>
  selectors.getIds(state)

export const getEntity: typeof selectors.getEntity = state =>
  selectors.getEntity(state)