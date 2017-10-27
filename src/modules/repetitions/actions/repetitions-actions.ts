import {v4} from 'uuid'

import {Repetition} from '../repetitions-model'
import {DOMAIN} from '../repetitions-constants'
import {Action} from 'modules/core'

export interface Action<T, P> {
  readonly type: T
  readonly payload: P
  readonly error?: boolean
  readonly meta?: any
}

export const ADD = 'repetitions/ADD'
export type ADD = Action<'repetitions/ADD', {readonly repetition: Repetition}>

/**
 * Creates ADD action.
 */
export const add = (
  name: string = '',
  description: string = '',
  hashFn: () => string = v4,
): ADD => ({
  type: ADD,
  payload: {
    repetition: {
      id: hashFn(),
      name,
      description,
    },
  },
})

export const EDIT = 'repetitions/EDIT'
export type EDIT = Action<'repetitions/EDIT', {readonly repetition: Repetition}>

/**
 * Creates EDIT action.
 */
export const edit = (
  repetition: Repetition,
): EDIT => ({
  type: EDIT,
  payload: {repetition},
})

export const REMOVE = 'repetitions/REMOVE'
export type REMOVE = Action<'repetitions/REMOVE', {readonly id: string}>

/**
 * Creates REMOVE action.
 */
export const remove = (
  id: string,
): REMOVE => ({
  type: REMOVE,
  payload: {id},
})

export type EntitiesActions =
  | ADD
  | EDIT
  | REMOVE

export type AllIdsActions =
  | ADD
  | REMOVE
