import {createSelector} from 'reselect'

import {StateSlice, Entities, AllIds, selectors} from 'common'
import {Workout} from './workouts-model'

export const getEntities = (state: StateSlice<Workout>) =>
  selectors.getEntities(state)

export const getEntitiesList = (state: StateSlice<Workout>) =>
  selectors.getEntitiesList(state)

export const getIds = (state: StateSlice<Workout>) =>
  selectors.getIds(state)

export const getEntity = (state: StateSlice<Workout>) =>
  selectors.getEntity(state)
