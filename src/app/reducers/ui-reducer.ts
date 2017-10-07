import {combineReducers} from 'redux'

import * as core from 'modules/core'

export const repetitions = (
  s: {readonly selected: string} = {selected: ''},
  a: core.Action<any>,
) => {
  switch (a.type) {
    case 'SELECT_ROW': return {
      ...s,
      selected: a.payload.id,
    }
    default: return s
  }
}

export const ui = combineReducers({repetitions})
