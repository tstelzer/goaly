import {createSelector} from 'reselect'
import {combineReducers} from 'redux'
import {pickBy} from 'ramda'

import * as actions from '../actions/repetitions-actions'
import {Repetition} from '../repetitions-model'
import * as core from 'modules/core'

/**
 * Repetitions keyed by their ID.
 */
export const entities = (
  s: core.Entities<Repetition> = {},
  a: core.Action<any>,
): core.Entities<Repetition> => {
  return core.handleActions<core.Entities<Repetition>>(
    a,
    {
      [actions.ADD]: ({payload}) => !s[payload.repetition.id]
        ? core.add(s, payload.repetition)
        : s,
      [actions.EDIT]: ({payload}) => s[payload.repetition.id]
        ? core.edit(s, payload.repetition)
        : s,
      [actions.REMOVE]: ({payload}) =>
        pickBy((repetition, id) => id !== payload.id, s),
      ['DEFAULT']: ({payload}) => s,
    },
    s,
  )
}

/**
 * Collection of IDs of existing repetitions.
 */
export const allIds = (
  s: core.AllIds = [],
  a: core.Action<any>,
): core.AllIds => {
  return core.handleActions<core.AllIds>(
    a,
    {
      [actions.ADD]: ({payload}) => !s.includes(payload.repetition.id)
        ? s.concat(payload.repetition.id)
        : s,
      [actions.REMOVE]: ({payload}) => s.filter(x => x !== payload.id),
      ['DEFAULT']: ({payload}) => s,
    },
    s,
  )
}
