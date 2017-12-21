import * as types from './set-types'
import {constants} from './set-constants'

export const updateSet = (set: types.Set): types.UpdateSet => ({
  type: constants.UPDATE,
  payload: {set},
})
