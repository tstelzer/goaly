import {createSelector} from 'reselect'
import {combineReducers} from 'redux'
import {pickBy} from 'ramda'

import * as actions from './set-reps-actions'
import {SetRep} from './set-reps-model'
import * as core from 'modules/core'

/**
 * setRep keyed by their ID.
 */
export const entities = (
  s: core.Entities<SetRep> = {},
  a: core.Action<any>,
): core.Entities<SetRep> => {
  return core.handleActions<core.Entities<SetRep>>(
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

/**
 * Collection of IDs of existing setRep.
 */
export const allIds = (
  s: core.AllIds = [],
  a: core.Action<any>,
): core.AllIds => {
  return core.handleActions<core.AllIds>(
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
  entities,
  allIds,
})
