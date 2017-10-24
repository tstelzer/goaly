import {createSelector} from 'reselect'
import {combineReducers} from 'redux'
import {pickBy} from 'ramda'

import {Entities, AllIds, Action, Reducer, handleActions, add, edit} from 'modules/core'
import * as actions from '../actions/repetitions-actions'
import {Repetition} from '../repetitions-model'

export type EntitiesState = Entities<Repetition>
type entities = Reducer<EntitiesState, Action<actions.EntitiesActions>>

/**
 * Repetitions keyed by their ID.
 */
export const entities: entities = (s = {}, a) => {
  return handleActions<EntitiesState>(
    a,
    {
      [actions.ADD]: ({payload}) =>
        !s[payload.repetition.id] ? add(s, payload.repetition) : s,
      [actions.EDIT]: ({payload}) =>
        s[payload.repetition.id] ? edit(s, payload.repetition) : s,
      [actions.REMOVE]: ({payload}) =>
        pickBy((repetition, id) => id !== payload.id, s),
      ['DEFAULT']: ({payload}) => s,
    },
    s,
  )
}

export type AllIdsState = AllIds
type allIds = Reducer<AllIdsState, Action<actions.AllIdsActions>>

/**
 * Collection of IDs of existing repetitions.
 */
export const allIds: allIds = (s = [], a) => {
  return handleActions<AllIds>(
    a,
    {
      [actions.ADD]: ({payload}) =>
        !s.includes(payload.repetition.id)
          ? s.concat(payload.repetition.id)
          : s,
      [actions.REMOVE]: ({payload}) => s.filter(x => x !== payload.id),
      ['DEFAULT']: ({payload}) => s,
    },
    s,
  )
}
