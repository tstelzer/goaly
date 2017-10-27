import {createSelector} from 'reselect'
import {combineReducers} from 'redux'
import {pickBy} from 'ramda'

import * as core from 'modules/core'
import * as actions from '../actions/repetitions-actions'
import {Repetition} from '../repetitions-model'

export type EntitiesState = core.Entities<Repetition>
type entities = core.Reducer<EntitiesState, actions.EntitiesActions>

/**
 * Repetitions keyed by their ID.
 */
export const entities: entities = (
  s = {},
  a,
) => {
  switch (a.type) {
    case actions.ADD: return !s[a.payload.repetition.id]
      ? core.add(s, a.payload.repetition)
      : s
    case actions.EDIT: return s[a.payload.repetition.id]
      ? core.edit(s, a.payload.repetition)
      : s
    case actions.REMOVE: return pickBy((repetition, id) => id !== a.payload.id, s)
    default: return s
  }
}

export type AllIdsState = core.AllIds
type allIds = core.Reducer<AllIdsState, actions.AllIdsActions>

/**
 * Collection of IDs of existing repetitions.
 */
export const allIds: allIds = (
  s = [],
  a,
) => {
  switch (a.type) {
    case actions.ADD: return !s.includes(a.payload.repetition.id)
      ? s.concat(a.payload.repetition.id)
      : s
    case actions.REMOVE: return s.filter(x => x !== a.payload.id)
    default: return s
  }
}
