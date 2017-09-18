import {merge} from 'ramda'

/**
 * Updates the state with a given entity.
 */
export const edit = (state: any, entity: any): any => ({
  ...state,
  [entity.id]: {
    ...merge(
      state[entity.id],
      entity,
    )
  }
})

/**
 * Adds a given entity to the state.
 */
export const add = (state: any, entity: any): any => ({
  ...state,
  [entity.id]: entity
})

export interface Action<T> {
  readonly type: string
  readonly payload: T
  readonly error?: boolean
  readonly meta?: any
}

type HandlersMap<T> = {
  [type: string]: {(action: Action<any>): T}
}

export const handleActions = <T>(
  action: Action<any>,
  handlers: HandlersMap<T>,
  defaultState: T
): T => {
  const handler = handlers[action.type] || handlers['DEFAULT']
  return handler ? handler(action): defaultState
}
