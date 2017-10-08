import * as core from 'modules/core'

export const SELECT = 'SELECT_ROW'
export interface SELECT {readonly id: string}

// TODO: Test
export const selectRow = (id: string): core.Action<SELECT> => ({
  type: SELECT,
  payload: {id},
})