import {createSelector} from 'reselect'
import {combineReducers} from 'redux'
import {pickBy} from 'ramda'

import * as actions from './sets-actions'
import {Set} from './sets-model'
import * as core from 'modules/core'

/**
 * set keyed by their ID.
 */
export const byId = (
  s: core.ById<Set> = {},
  a: core.Action<any>,
): core.ById<Set> => {
  return core.handleActions<core.ById<Set>>(
    a,
    {
      [actions.ADD]: ({payload}) => !s[payload.set.id]
        ? core.add(s, payload.set)
        : s,
      [actions.EDIT]: ({payload}) => s[payload.set.id]
        ? core.edit(s, payload.set)
        : s,
      [actions.REMOVE]: ({payload}) =>
        pickBy((set, id) => id !== payload.id, s),
      ['DEFAULT']: ({payload}) => s,
    },
    s,
  )
}

/**
 * Collection of IDs of existing set.
 */
export const allIds = (
  s: core.AllIds = [],
  a: core.Action<any>,
): core.AllIds => {
  return core.handleActions<core.AllIds>(
    a,
    {
      [actions.ADD]: ({payload}) => !s.includes(payload.set.id)
        ? s.concat(payload.set.id)
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
