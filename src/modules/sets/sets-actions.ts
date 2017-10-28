import {v4} from 'uuid'

import {Set} from './sets-model'
import {DOMAIN} from './sets-constants'
import {Action} from 'common'

export enum types {
  ADD_SET = 'sets/ADD_SET',
  EDIT_SET = 'sets/EDIT_SET',
  REMOVE_SET = 'sets/REMOVE_SET',
  ADD_SETREP = 'sets/ADD_SETREP',
}

export type AddSetAction = Action<types.ADD_SET, {readonly set: Set}>

/** Create action to add a set. */
export const add = (
  name: string = '',
  description: string = '',
  hashFn: () => string = v4,
): AddSetAction => ({
  type: types.ADD_SET,
  payload: {
    set: {
      id: hashFn(),
      name,
      description,
    },
  },
})

export type EditSetAction = Action<types.EDIT_SET, {readonly set: Set}>

/** Create action to edit a set.  */
export const edit = (
  set: Set,
): EditSetAction => ({
  type: types.EDIT_SET,
  payload: {
    set,
  },
})

export type RemoveSetAction = Action<types.REMOVE_SET, {readonly id: string}>

/** Create action to remove a set. */
export const remove = (
  id: string,
): RemoveSetAction => ({
  type: types.REMOVE_SET,
  payload: {id},
})

export type AddSetRepAction = Action<types.ADD_SETREP, {
  readonly setId: string,
  readonly repId: string,
}>

/** Create action to add a repetition to a set. */
export const addSetRep = (
  setId: string,
  repId: string,
): AddSetRepAction => ({
  type: types.ADD_SETREP,
  payload: {setId, repId},
})

export type SetRepActions =
  | AddSetRepAction

export type AllIdsActions =
  | AddSetAction
  | RemoveSetAction

export type EntitiesActions =
  | AddSetAction
  | EditSetAction
  | RemoveSetAction
