import {v4} from 'uuid'

import {Repetition} from '../repetitions-model'
import {DOMAIN} from '../repetitions-constants'
import {Action} from 'modules/core'

export enum types {
  ADD = 'repetitions/ADD',
  EDIT = 'repetitions/EDIT',
  REMOVE = 'repetitions/REMOVE',
}

export type AddAction = Action<types.ADD, {readonly repetition: Repetition}>

/**
 * Creates ADD action.
 */
export const add = (
  name: string = '',
  description: string = '',
  hashFn: () => string = v4,
): AddAction => ({
  type: types.ADD,
  payload: {
    repetition: {
      id: hashFn(),
      name,
      description,
    },
  },
})

export type EditAction = Action<types.EDIT, {readonly repetition: Repetition}>

/**
 * Creates EDIT action.
 */
export const edit = (
  repetition: Repetition,
): EditAction => ({
  type: types.EDIT,
  payload: {repetition},
})

export type RemoveAction = Action<types.REMOVE, {readonly id: string}>

/**
 * Creates REMOVE action.
 */
export const remove = (
  id: string,
): RemoveAction => ({
  type: types.REMOVE,
  payload: {id},
})

export type EntitiesActions =
  | AddAction
  | EditAction
  | RemoveAction

export type AllIdsActions =
  | AddAction
  | RemoveAction
