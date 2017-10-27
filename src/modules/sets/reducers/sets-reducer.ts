import {createSelector} from 'reselect'
import {combineReducers} from 'redux'
import {pickBy} from 'ramda'

import {types, EntitiesActions, SetRepActions, AllIdsActions} from '../sets-actions'
import {Set} from '../sets-model'
import * as core from 'modules/core'

export type EntitiesState = core.Entities<Set>
type EntitiesReducer = core.Reducer<EntitiesState, EntitiesActions>

/**
 * Sets keyed by their ID.
 */
export const entities: EntitiesReducer = (
  s = {},
  a,
) => {
  switch (a.type) {
    case types.ADD_SET: return !s[a.payload.set.id]
      ? core.add(s, a.payload.set)
      : s
    case types.EDIT_SET: return s[a.payload.set.id]
      ? core.edit(s, a.payload.set)
      : s
    case types.REMOVE_SET: return  pickBy((set, id) => id !== a.payload.id, s)
    default: return s
  }
}

export type AllIdsState = core.AllIds
type AllIdsReducer = core.Reducer<AllIdsState, AllIdsActions>

/**
 * Collection of IDs of existing sets.
 */
export const allIds: AllIdsReducer = (
  s = [],
  a,
) => {
  switch (a.type) {
    case types.ADD_SET: return !s.includes(a.payload.set.id)
      ? s.concat(a.payload.set.id)
      : s
    case types.REMOVE_SET: return s.filter(x => x !== a.payload.id)
    default: return s
  }
}

export interface SetRepsState {
  readonly [repetition: string]: {
    readonly [index: number]: string,
  }
}
type SetRepsReducer = core.Reducer<SetRepsState, SetRepActions>

/**
 * Ordered hash of repetition ids on sets.
 */
export const setReps: SetRepsReducer = (
  s = {},
  a,
) => {
  switch (a.type) {
    case types.ADD_SETREP: return {
      ...s,
      [a.payload.setId]: {
        ...core.addToOrdered(core.fixOrder(s[a.payload.setId]))(a.payload.repId),
      },
    }
    default: return s
  }
}
