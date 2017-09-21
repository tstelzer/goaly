import {v4} from 'uuid'

import {Set} from './sets-model'
import {DOMAIN} from './sets-constants'
import {Action} from 'modules/core'

export const ADD = `${DOMAIN}/ADD`
export interface ADD {readonly set: Set}

export const add = (
  name: string = '',
  description: string = '',
  hashFn: () => string = v4,
): Action<ADD> => ({
  type: ADD,
  payload: {
    set: {
      id: hashFn(),
      name,
      description,
    },
  },
})

export const EDIT = `${DOMAIN}/EDIT`
export interface EDIT {readonly set: Set}

export const edit = (
  set: Set,
): Action<EDIT> => ({
  type: EDIT,
  payload: {set},
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
