import {hasIn} from 'ramda'

import * as actions from './repetitions-actions'
import * as model from './repetitions-model'

describe('repetitions', () => {
  describe('action-creators', () => {
    it('creates an action to add a repetition', () => {
      const name = 'pushups'
      const description = 'some description'
      const repetition = {id: '1', name, description}
      const result = actions.add(name, description, () => '1')
      const expectedResult = {
        type: actions.ADD,
        payload: {repetition},
      }

      expect(result).toEqual(expectedResult)
    })

    it('creates an action to edit a repetition', () => {
      const repetition: model.Repetition = {
        id: '1',
        name: 'some name',
        description: 'some description',
      }
      const expectedResult = {
        type: actions.EDIT,
        payload: {repetition},
      }
      const result = actions.edit(repetition)

      expect(result).toEqual(expectedResult)
    })

    it('creates an action to remove a repetition', () => {
      const expectedResult = {
        type: actions.REMOVE,
        payload: {id: '1'},
      }
      const result = actions.remove("1")

      expect(result).toEqual(expectedResult)
    })
  })
})
