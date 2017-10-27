import {createSelector} from 'reselect'

import {StateSlice, Entities, AllIds, selectors} from 'modules/core'
import {Set} from './sets-model'
import {SetsState} from './reducers'

export const getEntities = (state: SetsState) =>
  selectors.getEntities(state)

export const getEntitiesList = (state: SetsState) =>
  selectors.getEntitiesList(state)

export const getIds = (state: SetsState) =>
  selectors.getIds(state)

export const getEntity = (state: SetsState) =>
  selectors.getEntity(state)
