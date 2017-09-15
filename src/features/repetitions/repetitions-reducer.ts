import {createSelector} from 'reselect'
import {combineReducers} from 'redux'
import {pickBy} from 'ramda'

import actionTypes from './repetitions-action-types'
import * as types from './repetitions-model'

const byId = (
  state: types.byId = {},
  action: types.Actions,
) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload
        }
      }
    case actionTypes.EDIT:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          ...action.payload,
        }
      }
    case actionTypes.REMOVE:
      return pickBy(id => id !== action.payload.id, state)
    default: return state
  }
}

const allIds = (
  state: Array<number> = [],
  action: types.Actions,
) => {
  switch(action.type) {
    case actionTypes.ADD:
      return state.concat(action.payload.id)
    case actionTypes.REMOVE:
      return state.filter(a => a !== action.payload.id)
    default: return state
  }
}

export default combineReducers({
  byId,
  allIds,
})
