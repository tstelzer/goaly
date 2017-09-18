import {v4} from 'uuid'

import * as model from './repetitions-model'
import {DOMAIN} from './repetitions-constants'
import {Action} from 'modules/core/state'

export const ADD = `${DOMAIN}/ADD`
export interface ADD {readonly repetition: model.Repetition}

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
    },
  },
})

export const EDIT = `${DOMAIN}/EDIT`
export interface EDIT {readonly repetition: model.Repetition}

export const edit = (
  repetition: model.Repetition,
): Action<EDIT> => ({
  type: EDIT,
  payload: {repetition},
})

export const REMOVE = `${DOMAIN}/REMOVE`
export interface REMOVE {readonly id: string}

export const remove = (
  id: string,
): Action<REMOVE> => ({
  type: REMOVE,
  payload: {id},
})

export type AllActions =
  | ADD
  | EDIT
  | REMOVE
