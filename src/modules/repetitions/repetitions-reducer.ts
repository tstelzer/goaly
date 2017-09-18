import {createSelector} from 'reselect'
import {combineReducers} from 'redux'
import {pickBy} from 'ramda'

import * as actions from './repetitions-actions'
import * as model from './repetitions-model'
import * as core from 'modules/core'

/**
 * Repetitions keyed by their ID.
 */
export const byId = (
  state: {[id: string]: model.Repetition} = {},
  action: actions.Action<any>,
) => {
  switch (action.type) {
    case actions.ADD:
      return !state[action.payload.repetition.id]
        ? core.add(state, action.payload.repetition)
        : state
    case actions.EDIT:
      return state[action.payload.repetition.id]
        ? core.edit(state, action.payload.repetition)
        : state
    case actions.REMOVE:
      return pickBy((repetition, id) => id !== action.payload.id, state)
    default: return state
  }
}

/**
 * Collection of IDs of existing repetitions.
 */
export const allIds = (
  state: Array<string> = [],
  action: actions.Action<any>,
) => {
  switch(action.type) {
    case actions.ADD:
      return !state.includes(action.payload.repetition.id)
        ? state.concat(action.payload.repetition.id)
        : state
    case actions.REMOVE:
      return state.filter(a => a !== action.payload.id)
    default: return state
  }
}

export default combineReducers({
  byId,
  allIds,
})
