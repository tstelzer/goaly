import {createSelector} from 'reselect'
import {combineReducers} from 'redux'
import {pickBy} from 'ramda'

import * as actions from './repetitions-actions'
import * as model from './repetitions-model'
import * as core from 'modules/core'

interface ById {
  readonly [id: string]: model.Repetition,
}

/**
 * Repetitions keyed by their ID.
 */
export const byId = (
  s: ById = {},
  a: core.Action<any>,
): ById => {
  return core.handleActions<ById>(
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

type allIds = string[]

/**
 * Collection of IDs of existing repetitions.
 */
export const allIds = (
  s: allIds = [],
  a: core.Action<any>,
): allIds => {
  return core.handleActions<allIds>(
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

export default combineReducers({
  byId,
  allIds,
})
