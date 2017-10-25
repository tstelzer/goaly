import {merge} from 'ramda'

import {Action, HandlersMap, HandleActions} from 'modules/core'

/**
 * Updates the state with an entity.
 */
export const edit = (state: any, entity: any): any => ({
  ...state,
  [entity.id]: {
    ...merge(
      state[entity.id],
      entity,
    ),
  },
})

/**
 * Adds an entity to the state.
 */
export const add = (state: any, entity: any): any => ({
  ...state,
  [entity.id]: entity,
})

const DEFAULT = 'DEFAULT'

/**
 * Pattern for handling actions in a reducer.
 * With this we achieve 2 things:
 * 1. Typesafety for state and return values.
 * 2. Reduce boilerplace in reducer, removes switch/case.
 */
export const handleActions: HandleActions = (
  action,
  handlers,
  defaultState,
) => {
  const handler = handlers[action.type] || handlers[DEFAULT]
  return handler ? handler(action) : defaultState
}
