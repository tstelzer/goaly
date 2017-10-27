import {Action} from 'modules/core'

export enum types {
  SELECT = 'SELECT_ROW',
}
export type SelectAction = Action<types.SELECT, {readonly id: string}>

/**
 * Creates SELECT action.
 */
export const selectRow = (
  id: string,
): SelectAction => ({
  type: types.SELECT,
  payload: {id},
})

export type UiActions =
  | SelectAction
