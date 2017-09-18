import {createSelector} from 'reselect'
import {combineReducers} from 'redux'
import {pickBy} from 'ramda'

import actionTypes from './repetitions-action-types'
import * as types from './repetitions-model'
import * as core from 'modules/core'

/**
 * Repetitions keyed by their ID.
 */
export const byId = (
  state: types.byId = {},
  action: types.Actions,
) => {
  switch (action.type) {
    case actionTypes.ADD:
      return !state[action.payload.repetition.id]
        ? core.add(state, action.payload.repetition)
        : state
    case actionTypes.EDIT:
      return state[action.payload.repetition.id]
        ? core.edit(state, action.payload.repetition)
        : state
    case actionTypes.REMOVE:
      return pickBy((repetition, id) => id !== action.payload.id, state)
    default: return state
  }
}

/**
 * Collection of IDs of existing repetitions.
 */
export const allIds = (
  state: Array<types.uuid> = [],
  action: types.Actions,
) => {
  switch(action.type) {
    case actionTypes.ADD:
      return !state.includes(action.payload.repetition.id)
        ? state.concat(action.payload.repetition.id)
        : state
    case actionTypes.REMOVE:
      return state.filter(a => a !== action.payload.id)
    default: return state
  }
}

export default combineReducers({
  byId,
  allIds,
})
