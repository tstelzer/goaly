import {combineReducers} from 'redux'

import {Action, Reducer} from 'modules/core'
import * as actions from '../actions/ui-actions'
import * as model from '../repetitions-model'

export interface UiState {
  readonly selectedRepetition: string
}
type ui = Reducer<UiState, actions.UiActions>

/**
 * Repetitions UI specific state.
 */
export const ui: ui = (
  s = {selectedRepetition: ''},
  a,
) => {
  switch (a.type) {
    case actions.SELECT: return {
      ...s,
      selectedRepetition: a.payload.id,
    }
    default: return s
  }
}
