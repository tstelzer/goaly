import {createSelector} from 'reselect'
import {combineReducers} from 'redux'
import {pickBy} from 'ramda'

import * as actions from './workouts-actions'
import {Workout} from './workouts-model'
import * as core from 'common'

/**
 * Workouts keyed by their ID.
 */
export const entities = (
  s: core.Entities<Workout> = {},
  a: core.Action<any>,
): core.Entities<Workout> => {
  return core.handleActions<core.Entities<Workout>>(
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

/**
 * Collection of IDs of existing workouts.
 */
export const allIds = (
  s: core.AllIds = [],
  a: core.Action<any>,
): core.AllIds => {
  return core.handleActions<core.AllIds>(
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
  entities,
  allIds,
})
