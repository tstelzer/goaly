import {createSelector} from 'reselect'

import {StateSlice, Entities, AllIds, selectors} from 'common'
import {RepetitionsState} from '../reducers'
import {Repetition} from '../repetitions-model'

export const getEntities = (state: RepetitionsState) =>
  selectors.getEntities(state)

export const getEntitiesList = (state: RepetitionsState) =>
  selectors.getEntitiesList(state)

export const getIds = (state: RepetitionsState) =>
  selectors.getIds(state)

export const getEntity = (state: RepetitionsState) =>
  selectors.getEntity(state)
