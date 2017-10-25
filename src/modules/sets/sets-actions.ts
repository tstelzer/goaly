/* tslint:disable class-name */
import {v4} from 'uuid'

import {Set} from './sets-model'
import {DOMAIN} from './sets-constants'
import {Action} from 'modules/core'

export const ADD_SET = 'sets/ADD_SET'
export interface ADD_SET {
  readonly type: 'sets/ADD_SET',
  readonly payload: {
    readonly set: Set,
  }
}

/** Create action to add a set. */
export const add = (
  name: string = '',
  description: string = '',
  hashFn: () => string = v4,
): ADD_SET => ({
  type: ADD_SET,
  payload: {
    set: {
      id: hashFn(),
      name,
      description,
    },
  },
})

export const EDIT_SET = 'sets/EDIT_SET'

export interface EDIT_SET {
  readonly type: 'sets/EDIT_SET',
  readonly payload: {
    readonly set: Set,
  }
}

/** Create action to edit a set.  */
export const edit = (
  set: Set,
): EDIT_SET => ({
  type: EDIT_SET,
  payload: {
    set,
  },
})

export const REMOVE_SET = `sets/REMOVE_SET`
export interface REMOVE_SET {
  readonly type: 'sets/REMOVE_SET',
  readonly payload: {
    readonly id: string,
  }
}

/** Create action to remove a set. */
export const remove = (
  id: string,
): REMOVE_SET => ({
  type: REMOVE_SET,
  payload: {id},
})

export const ADD_SETREP = 'sets/ADD_SETREP'
export interface ADD_SETREP {
  readonly type: 'sets/ADD_SETREP',
  readonly payload: {
    readonly setId: string,
    readonly repId: string,
  }
}

/** Create action to add a repetition to a set. */
export const addSetRep = (
  setId: string,
  repId: string,
): ADD_SETREP => ({
  type: ADD_SETREP,
  payload: {setId, repId},
})

export type SetRepActions =
  | ADD_SETREP

export type AllIdsActions =
  | ADD_SET
  | REMOVE_SET

export type EntitiesActions =
  | ADD_SET
  | EDIT_SET
  | REMOVE_SET
