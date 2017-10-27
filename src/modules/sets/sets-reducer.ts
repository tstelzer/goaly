import {createSelector} from 'reselect'
import {combineReducers} from 'redux'
import {pickBy} from 'ramda'

import * as actions from './sets-actions'
import {Set} from './sets-model'
import * as core from 'modules/core'

export type EntitiesState = core.Entities<Set>
type entities = core.Reducer<EntitiesState, actions.EntitiesActions>

/**
 * Sets keyed by their ID.
 */
export const entities: entities = (
  s = {},
  a,
) => {
  switch (a.type) {
    case actions.ADD_SET: return !s[a.payload.set.id]
      ? core.add(s, a.payload.set)
      : s
    case actions.EDIT_SET: return s[a.payload.set.id]
      ? core.edit(s, a.payload.set)
      : s
    case actions.REMOVE_SET: return  pickBy((set, id) => id !== a.payload.id, s)
    default: return s
  }
}

export type AllIdsState = core.AllIds
type allIds = core.Reducer<AllIdsState, actions.AllIdsActions>

/**
 * Collection of IDs of existing sets.
 */
export const allIds: allIds = (
  s = [],
  a,
) => {
  switch (a.type) {
    case actions.ADD_SET: return !s.includes(a.payload.set.id)
      ? s.concat(a.payload.set.id)
      : s
    case actions.REMOVE_SET: return s.filter(x => x !== a.payload.id)
    default: return s
  }
}

export interface SetRepsState {
  readonly [repetition: string]: {
    readonly [index: number]: string,
  }
}
type setReps = core.Reducer<SetRepsState, actions.SetRepActions>

/**
 * Ordered hash of repetition ids on sets.
 */
export const setReps: setReps = (
  s = {},
  a,
) => {
  switch (a.type) {
    case actions.ADD_SETREP: return {
      ...s,
      [a.payload.setId]: {
        ...core.addToOrdered(core.fixOrder(s[a.payload.setId]))(a.payload.repId),
      },
    }
    default: return s
  }
}

export default combineReducers({
  entities,
  allIds,
})
