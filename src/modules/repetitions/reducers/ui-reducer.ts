import {combineReducers, Reducer} from 'redux'

import * as core from 'modules/core'
import * as actions from '../actions/ui-actions'
import * as model from '../repetitions-model'

export const ui: model.UiReducer = (
  s = {selectedRepetition: ''},
  a,
) => {
  return core.handleActions<model.UiState>(
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
