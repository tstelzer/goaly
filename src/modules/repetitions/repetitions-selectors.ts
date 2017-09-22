import {createSelector} from 'reselect'

import {StateSlice, ById, AllIds, selectors} from 'modules/core'
import {Repetition} from './repetitions-model'

export const getEntities = (state: StateSlice<Repetition>) =>
  selectors.getEntities(state)

export const getEntitiesList = (state: StateSlice<Repetition>) =>
  selectors.getEntitiesList(state)

export const getIds = (state: StateSlice<Repetition>) =>
  selectors.getIds(state)

export const getEntity = (state: StateSlice<Repetition>) =>
  selectors.getEntity(state)
