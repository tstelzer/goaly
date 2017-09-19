import {createSelector} from 'reselect'
import {combineReducers} from 'redux'
import {pickBy} from 'ramda'

import * as actions from './workouts-actions'
import {Workout} from './workouts-model'
import * as core from 'modules/core'

interface ById {
  readonly [id: string]: Workout,
}

/**
 * Workout keyed by their ID.
 */
export const byId = (
  s: ById = {},
  a: core.Action<any>,
): ById => {
  return core.handleActions<ById>(
    a,
    {
      [actions.ADD]: ({payload}) => !s[payload.workout.id]
        ? core.add(s, payload.workout)
        : s,
      [actions.EDIT]: ({payload}) => s[payload.workout.id]
        ? core.edit(s, payload.workout)
        : s,
      [actions.REMOVE]: ({payload}) =>
        pickBy((workout, id) => id !== payload.id, s),
      ['DEFAULT']: ({payload}) => s,
    },
    s,
  )
}

type allIds = string[]

/**
 * Collection of IDs of existing workout.
 */
export const allIds = (
  s: allIds = [],
  a: core.Action<any>,
): allIds => {
  return core.handleActions<allIds>(
    a,
    {
      [actions.ADD]: ({payload}) => !s.includes(payload.workout.id)
        ? s.concat(payload.workout.id)
        : s,
      [actions.REMOVE]: ({payload}) => s.filter(x => x !== payload.id),
      ['DEFAULT']: ({payload}) => s,
    },
    s,
  )
}

export default combineReducers({
  byId,
  allIds,
})
