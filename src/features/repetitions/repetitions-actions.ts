import {v4} from 'uuid'

import * as types from './repetitions-model'
import actionTypes from './repetitions-action-types'

export const add: types.add = (
  name = '',
  description = '',
  hashFn = v4,
) => ({
  type: actionTypes.ADD,
  payload: {
    repetition: {
      id: hashFn(),
      name,
      description,
    }
  }
})

export const edit: types.edit = (
  repetition,
) => ({
  type: actionTypes.EDIT,
  payload: {repetition}
})

export const remove: types.remove = (
  id,
) => ({
  type: actionTypes.REMOVE,
  payload: {id},
})

