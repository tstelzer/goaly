import {v4} from 'uuid'

import {Workout} from './workouts-model'
import {DOMAIN} from './workouts-constants'
import {Action} from 'modules/core'

export const ADD = `${DOMAIN}/ADD`
export interface ADD {readonly workout: Workout}

export const add = (
  name: string = '',
  description: string = '',
  hashFn: () => string = v4,
): Action<ADD> => ({
  type: ADD,
  payload: {
    workout: {
      id: hashFn(),
      name,
      description,
    },
  },
})

export const EDIT = `${DOMAIN}/EDIT`
export interface EDIT {readonly workout: Workout}

export const edit = (
  workout: Workout,
): Action<EDIT> => ({
  type: EDIT,
  payload: {workout},
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
