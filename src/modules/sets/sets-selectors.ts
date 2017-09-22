import {createSelector} from 'reselect'

import {StateSlice, ById, AllIds, selectors} from 'modules/core'
import {Set} from './sets-model'

export const getEntities = (state: StateSlice<Set>) =>
  selectors.getEntities(state)

export const getEntitiesList = (state: StateSlice<Set>) =>
  selectors.getEntitiesList(state)

export const getIds = (state: StateSlice<Set>) =>
  selectors.getIds(state)

export const getEntity = (state: StateSlice<Set>) =>
  selectors.getEntity(state)

