import {createSelector} from 'reselect'
import {combineReducers} from 'redux'
import {pickBy} from 'ramda'

import * as actions from './sets-actions'
import {Set} from './sets-model'
import * as core from 'modules/core'

interface ById {
  readonly [id: string]: Set,
}

/**
 * set keyed by their ID.
 */
export const byId = (
  s: ById = {},
  a: core.Action<any>,
): ById => {
  return core.handleActions<ById>(
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

type allIds = string[]

/**
 * Collection of IDs of existing set.
 */
export const allIds = (
  s: allIds = [],
  a: core.Action<any>,
): allIds => {
  return core.handleActions<allIds>(
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
