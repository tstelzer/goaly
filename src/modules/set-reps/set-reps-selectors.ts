import {createSelector} from 'reselect'
import {values} from 'ramda'

import {StateSlice, ById, AllIds, selectors} from 'modules/core'
import {SetRep} from './set-reps-model'

export const getEntities = (state: StateSlice<SetRep>) =>
  selectors.getEntities(state)

export const getEntitiesList = (state: StateSlice<SetRep>) =>
  selectors.getEntitiesList(state)

export const getIds = (state: StateSlice<SetRep>) =>
  selectors.getIds(state)

export const getEntity = (state: StateSlice<SetRep>) =>
  selectors.getEntity(state)
