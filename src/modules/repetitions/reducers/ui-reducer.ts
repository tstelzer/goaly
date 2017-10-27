import {combineReducers} from 'redux'

import {Action, Reducer} from 'modules/core'
import {types, UiActions} from '../actions/ui-actions'
import * as model from '../repetitions-model'

export interface UiState {
  readonly selectedRepetition: string
}

type UiReducer = Reducer<UiState, UiActions>

/**
 * Repetitions UI specific state.
 */
export const ui: UiReducer = (
  s = {selectedRepetition: ''},
  a,
) => {
  switch (a.type) {
    case types.SELECT: return {
      ...s,
      selectedRepetition: a.payload.id,
    }
    default: return s
  }
}
