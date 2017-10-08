import {Action} from 'modules/core'

export const SELECT = 'SELECT_ROW'
export interface SELECT {readonly id: string}

/**
 * Creates SELECT action.
 */
export const selectRow = (
  id: string,
): Action<SELECT> => ({
  type: SELECT,
  payload: {id},
})
