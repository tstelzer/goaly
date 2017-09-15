import actionTypes from './repetitions-action-types'

export type Repetition = {
  readonly id: number
  readonly name?: string
  readonly description?: string
}


export type byId = {
  readonly [id: number]: Repetition
}

export type State = {
  readonly byId: byId,
  readonly allIds: number[],
}

type AddAction = {
  readonly type: actionTypes.ADD,
  readonly payload: Repetition
}

type EditAction = {
  readonly type: actionTypes.EDIT,
  readonly payload: Repetition
}

type Id = { readonly id: number }

type RemoveAction = {
  readonly type: actionTypes.REMOVE,
  readonly payload: Id
}

type OtherAction = {
  readonly type: actionTypes.OTHER_ACTION
}

export type Actions =
  | OtherAction
  | EditAction
  | AddAction
  | RemoveAction
