import {Action} from 'modules/core'

export const SELECT = 'SELECT_ROW'
export type SELECT = Action<'SELECT_ROW', {readonly id: string}>

/**
 * Creates SELECT action.
 */
export const selectRow = (
  id: string,
): SELECT => ({
  type: SELECT,
  payload: {id},
})

export type UiActions =
  | SELECT
