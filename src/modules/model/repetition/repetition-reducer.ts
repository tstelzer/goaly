import {pickBy} from 'ramda'

import * as common from 'common'
import * as types from './repetition'
import {constants} from './repetition-constants'

export const repetitions: types.RepetitionReducer = (s = {}, a) => {
  switch (a.type) {
    case constants.ADD:
      return !s[a.payload.repetition.id]
        ? common.add(s, a.payload.repetition)
        : s
    case constants.UPDATE:
      return s[a.payload.repetition.id]
        ? common.edit(s, a.payload.repetition)
        : s
    case constants.REMOVE:
      return pickBy((repetition, id) => id !== a.payload.id, s)
    default:
      return s
  }
}

export default repetitions
