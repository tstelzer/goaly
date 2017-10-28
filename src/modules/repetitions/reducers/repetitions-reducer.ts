import {createSelector} from 'reselect'
import {combineReducers} from 'redux'
import {pickBy} from 'ramda'

import * as core from 'common'
import {types, EntitiesActions, AllIdsActions} from '../actions/repetitions-actions'
import {Repetition} from '../repetitions-model'

export type EntitiesState = core.Entities<Repetition>
type EntitiesReducer = core.Reducer<EntitiesState, EntitiesActions>

/**
 * Repetitions keyed by their ID.
 */
export const entities: EntitiesReducer = (
  s = {},
  a,
) => {
  switch (a.type) {
    case types.ADD: return !s[a.payload.repetition.id]
      ? core.add(s, a.payload.repetition)
      : s
    case types.EDIT: return s[a.payload.repetition.id]
      ? core.edit(s, a.payload.repetition)
      : s
    case types.REMOVE: return pickBy((repetition, id) => id !== a.payload.id, s)
    default: return s
  }
}

export type AllIdsState = core.AllIds
type AllIdsReducer = core.Reducer<AllIdsState, AllIdsActions>

/**
 * Collection of IDs of existing repetitions.
 */
export const allIds: AllIdsReducer = (
  s = [],
  a,
) => {
  switch (a.type) {
    case types.ADD: return !s.includes(a.payload.repetition.id)
      ? s.concat(a.payload.repetition.id)
      : s
    case types.REMOVE: return s.filter(x => x !== a.payload.id)
    default: return s
  }
}
