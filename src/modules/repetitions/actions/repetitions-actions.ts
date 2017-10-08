import {v4} from 'uuid'

import {Repetition} from '../repetitions-model'
import {DOMAIN} from '../repetitions-constants'
import {Action} from 'modules/core'

export const ADD = `${DOMAIN}/ADD`
export interface ADD {readonly repetition: Repetition}

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
export interface EDIT {readonly repetition: Repetition}

export const edit = (
  repetition: Repetition,
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
