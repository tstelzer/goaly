import {combineReducers, Reducer} from 'redux'

import * as core from 'modules/core'
import * as actions from '../actions/ui-actions'

export interface UiState {
  readonly selectedRepetition: string,
}

export const ui: Reducer<UiState> = (
  s = {selectedRepetition: ''},
  a,
) => {
  switch (a.type) {
    case 'SELECT_ROW':
      return {
        ...s,
        selectedRepetition: a.payload.id,
      }
    default:
      return s
  }
}
