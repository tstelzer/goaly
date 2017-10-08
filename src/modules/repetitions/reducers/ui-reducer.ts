import {combineReducers} from 'redux'

import * as core from 'modules/core'

// TODO: Test
export const ui = (
  s: {readonly selected: string} = {selected: ''},
  a: core.Action<any>,
) => {
  switch (a.type) {
    case 'SELECT_ROW': return {
      ...s,
      selectedRepetition: a.payload.id,
    }
    default: return s
  }
}
