import {combineReducers} from 'redux'

import {FSA, Reducer, ID} from 'common'
import * as repetition from './repetition'
import * as set from './set'
import * as types from './model'

const initialState = {
  entities: {
    repetitions: {},
    sets: {},
  },
  result: {
    repetitions: [],
    sets: [],
  },
}

const model: types.ModelReducer = (s = initialState, a) => {
  switch (a.type) {
   case repetition.constants.ADD:
    return s
      // return !s[a.payload.repetition.id]
        // ? common.add(s, a.payload.repetition)
        // : s
    case repetition.constants.UPDATE:
      return s
      // return s[a.payload.repetition.id]
      //   ? common.edit(s, a.payload.repetition)
      //   : s
    case repetition.constants.REMOVE:
      return s
      // return pickBy((repetition, id) => id !== a.payload.id, s)
    case set.constants.ADD:
      return s
      // return !s[a.payload.set.id] ? common.add(s, a.payload.set) : s
    case set.constants.UPDATE:
      return s
      // return s[a.payload.set.id] ? common.edit(s, a.payload.set) : s
    case set.constants.REMOVE:
      return s
      // return pickBy((set, id) => id !== a.payload.id, s)
    default: return s
  }
}

export default model

// export default combineReducers<types.ModelState>({
//   repetitions: repetitionReducer,
//   sets: setReducer,
// })
