/* tslint:disable no-expression-statement */
import {types, selectRow} from './ui-actions'

describe('repetition', () => {
  describe('ui actions', () => {
    it('creates an action to select a repetition', () => {
      const result = selectRow('1')
      const expectedResult = {
        type: types.SELECT,
        payload: {id: '1'},
      }

      expect(result).toEqual(expectedResult)
    })
  })
})
