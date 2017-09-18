import {v4} from 'uuid'

import * as model from './repetitions-model'
import {DOMAIN} from './repetitions-constants'

export interface Action<T> {
  readonly type: string
  readonly payload?: T
  readonly error?: boolean
  readonly meta?: any
}

export const ADD = `${DOMAIN}/ADD`
interface ADD {readonly repetition: model.Repetition}

export const add = (
  name: string = '',
  description: string = '',
  hashFn: () => string = v4,
): Action<ADD> => ({
  type: ADD,
  payload: {
    repetition: {
      id: hashFn(),
      name,
      description,
    }
  }
})

export const EDIT = `${DOMAIN}/EDIT`
interface EDIT {readonly repetition: model.Repetition}

export const edit = (
  repetition: model.Repetition,
) => ({
  type: EDIT,
  payload: {repetition}
})

export const REMOVE = `${DOMAIN}/REMOVE`
interface REMOVE {readonly id: string}

export const remove = (
  id: string,
) => ({
  type: REMOVE,
  payload: {id},
})
