import {combineReducers} from 'redux'

import * as reps from 'modules/repetitions'

// TODO: Refactor
import * as core from 'modules/core'

export interface description {
  readonly selected: string
}

export const description = (
  s: description = {selected: ''},
  a: core.Action<any>,
) => {
  switch(a.type) {
    case 'SELECT_ROW': return {
      ...s,
      selected: a.payload.id,
    }
    default: return s
  }
}

const ui = combineReducers({description})
// end refactor

export const reducers = combineReducers({
  repetitions: reps.reducer,
  ui,
})
