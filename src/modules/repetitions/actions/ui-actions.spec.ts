/* tslint:disable no-expression-statement */
import * as actions from './ui-actions'

describe('repetition', () => {
  describe('ui actions', () => {
    it('creates an action to select a repetition', () => {
      const result = actions.selectRow('1')
      const expectedResult = {
        type: actions.SELECT,
        payload: {id: '1'},
      }

      expect(result).toEqual(expectedResult)
    })
  })
})
