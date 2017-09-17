import actionTypes from './repetitions-action-types'

export type uuid = string

export type Repetition = {
  readonly id: uuid
  readonly name?: string
  readonly description?: string
}

export type byId = {
  readonly [id: string]: Repetition
}

export type State = {
  readonly byId: byId
  readonly allIds: uuid[]
}

export type AddAction = {
  readonly type: actionTypes.ADD
  readonly payload: {
    readonly repetition: Repetition
  }
}

export type add = (
  name?: string,
  description?: string,
  hashFn?: () => uuid,
) => AddAction

export type EditAction = {
  readonly type: actionTypes.EDIT
  readonly payload: {
    readonly repetition: Repetition
  }
}

export type edit = (
  repetition: Repetition,
) => EditAction

export type RemoveAction = {
  readonly type: actionTypes.REMOVE
  readonly payload: {
    readonly id: uuid
  }
}

export type remove = (
  id: uuid,
) => RemoveAction

type OtherAction = {
  readonly type: actionTypes.OTHER_ACTION
}

export type Actions =
  | OtherAction
  | EditAction
  | AddAction
  | RemoveAction
