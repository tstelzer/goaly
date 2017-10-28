import {v4} from 'uuid'

import {SetRep} from './set-reps-model'
import {DOMAIN} from './set-reps-constants'
import {Action} from 'common'

export const ADD = `${DOMAIN}/ADD`
export interface ADD {readonly setRep: SetRep}

export const add = (
  setId: string,
  repId: string,
  slot: number,
  iterations: number = 1,
  hashFn: () => string = v4,
): Action<ADD> => ({
  type: ADD,
  payload: {
    setRep: {
      id: hashFn(),
      setId,
      repId,
      slot,
      iterations,
    },
  },
})

export const EDIT = `${DOMAIN}/EDIT`
export interface EDIT {readonly setRep: SetRep}

export const edit = (
  setRep: SetRep,
): Action<EDIT> => ({
  type: EDIT,
  payload: {setRep},
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
