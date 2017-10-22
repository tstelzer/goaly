import {combineReducers} from 'redux'

import {Action, Reducer, handleActions} from 'modules/core'
import * as actions from '../actions/ui-actions'
import * as model from '../repetitions-model'

export interface UiState {
  readonly selectedRepetition: string
}
type ui = Reducer<UiState, Action<actions.UiActions>>

/**
 * Repetitions UI specific state.
 */
export const ui: ui = (
  s = {selectedRepetition: ''},
  a,
) => {
  return handleActions<UiState>(
    a,
    {
      [actions.SELECT]: ({payload}) => ({
        ...s,
        selectedRepetition: payload.id,
      }),
    },
    s,
  )
}
