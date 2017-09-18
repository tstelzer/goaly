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

