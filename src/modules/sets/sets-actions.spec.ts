/* tslint:disable no-expression-statement */
import {hasIn} from 'ramda'

import * as actions from './sets-actions'
import {Set} from './sets-model'

describe('sets', () => {
  describe('action-creators', () => {
    it('creates an action to add a set', () => {
      const name = 'pushups'
      const description = 'some description'
      const set = {id: '1', name, description}
      const result = actions.add(name, description, () => '1')
      const expectedResult = {
        type: actions.types.ADD_SET,
        payload: {set},
      }

      expect(result).toEqual(expectedResult)
    })

    it('creates an action to edit a set', () => {
      const set: Set = {
        id: '1',
        name: 'some name',
        description: 'some description',
      }
      const expectedResult = {
        type: actions.types.EDIT_SET,
        payload: {set},
      }
      const result = actions.edit(set)

      expect(result).toEqual(expectedResult)
    })

    it('creates an action to remove a set', () => {
      const expectedResult = {
        type: actions.types.REMOVE_SET,
        payload: {id: '1'},
      }
      const result = actions.remove("1")

      expect(result).toEqual(expectedResult)
    })
  })
})
