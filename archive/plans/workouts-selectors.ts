import {createSelector} from 'reselect'

import {StateSlice, ById, AllIds, selectors} from 'modules/core'
import {Workout} from './workouts-model'

export const getEntities = (state: StateSlice<Workout>) =>
  selectors.getEntities(state)

export const getEntitiesList = (state: StateSlice<Workout>) =>
  selectors.getEntitiesList(state)

export const getIds = (state: StateSlice<Workout>) =>
  selectors.getIds(state)

export const getEntity = (state: StateSlice<Workout>) =>
  selectors.getEntity(state)
