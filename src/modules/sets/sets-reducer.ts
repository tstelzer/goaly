import {createSelector} from 'reselect'
import {combineReducers} from 'redux'
import {pickBy} from 'ramda'

import * as actions from './sets-actions'
import {Set} from './sets-model'
import * as core from 'modules/core'

export type EntitiesState = core.Entities<Set>
type entities = core.Reducer<EntitiesState, core.Action<actions.EntitiesActions>>

/**
 * Sets keyed by their ID.
 */
export const entities: entities = (
  s = {},
  a,
) => {
  return core.handleActions<EntitiesState>(
    a,
    {
      [actions.ADD_SET]: ({payload}) => !s[payload.set.id]
        ? core.add(s, payload.set)
        : s,
      [actions.EDIT_SET]: ({payload}) => s[payload.set.id]
        ? core.edit(s, payload.set)
        : s,
      [actions.REMOVE_SET]: ({payload}) =>
        pickBy((set, id) => id !== payload.id, s),
      ['DEFAULT']: ({payload}) => s,
    },
    s,
  )
}

export type AllIdsState = core.AllIds
type allIds = core.Reducer<AllIdsState, core.Action<actions.AllIdsActions>>

/**
 * Collection of IDs of existing sets.
 */
export const allIds: allIds = (
  s = [],
  a,
) => {
  return core.handleActions<core.AllIds>(
    a,
    {
      [actions.ADD_SET]: ({payload}) => !s.includes(payload.set.id)
        ? s.concat(payload.set.id)
        : s,
      [actions.REMOVE_SET]: ({payload}) => s.filter(x => x !== payload.id),
      ['DEFAULT']: ({payload}) => s,
    },
    s,
  )
}

export interface SetRepsState {
  readonly [repetition: string]: {
    readonly [index: number]: string,
  }
}
type setReps = core.Reducer<SetRepsState, core.Action<actions.SetRepActions>>

/**
 * Ordered hash of repetition ids on sets.
 */
export const setReps: setReps = (
  s = {},
  a,
) => {
  return core.handleActions<SetRepsState>(
    a,
    {
      [actions.ADD_SETREP]: ({payload}) => ({
        ...s,
        [payload.setId]: {
          ...core.addToOrdered(core.fixOrder(s[payload.setId]))(payload.repId),
        },
      }),
    },
    s,
  )
}

export default combineReducers({
  entities,
  allIds,
})
