import {createSelector} from 'reselect'
import {combineReducers} from 'redux'
import {pickBy} from 'ramda'

import * as actions from './set-reps-actions'
import {SetRep} from './set-reps-model'
import * as core from 'modules/core'

interface ById {
  readonly [id: string]: SetRep,
}

/**
 * setRep keyed by their ID.
 */
export const byId = (
  s: ById = {},
  a: core.Action<any>,
): ById => {
  return core.handleActions<ById>(
    a,
    {
      [actions.ADD]: ({payload}) =>
        !s[payload.setRep.id]
          ? core.add(s, payload.setRep)
          : s,

      [actions.EDIT]: ({payload}) =>
        s[payload.setRep.id]
          ? core.edit(s, payload.setRep)
          : s,

      [actions.REMOVE]: ({payload}) =>
        pickBy((setRep, id) => id !== payload.id, s),

      ['DEFAULT']: ({payload}) => s,
    },
    s,
  )
}

type allIds = string[]

/**
 * Collection of IDs of existing setRep.
 */
export const allIds = (
  s: allIds = [],
  a: core.Action<any>,
): allIds => {
  return core.handleActions<allIds>(
    a,
    {
      [actions.ADD]: ({payload}) => !s.includes(payload.setRep.id)
        ? s.concat(payload.setRep.id)
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
