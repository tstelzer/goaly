/* tslint:disable no-expression-statement */
import {hasIn} from 'ramda'

import {Action} from 'modules/core'
import * as actions from './repetitions-actions'
import {Repetition} from '../repetitions-model'

describe('repetitions', () => {
  describe('action-creators', () => {
    it('creates an action to add a repetition', () => {
      const name = 'pushups'
      const description = 'some description'
      const repetition: Repetition = {id: '1', name, description}

      const result = actions.add(name, description, () => '1')
      const expectedResult: actions.AddAction = {
        type: actions.types.ADD,
        payload: {repetition},
      }

      expect(result).toEqual(expectedResult)
    })

    it('creates an action to edit a repetition', () => {
      const repetition: Repetition = {
        id: '1',
        name: 'some name',
        description: 'some description',
      }

      const result = actions.edit(repetition)
      const expectedResult: actions.EditAction = {
        type: actions.types.EDIT,
        payload: {repetition},
      }

      expect(result).toEqual(expectedResult)
    })

    it('creates an action to remove a repetition', () => {
      const result = actions.remove('1')
      const expectedResult: actions.RemoveAction = {
        type: actions.types.REMOVE,
        payload: {id: '1'},
      }

      expect(result).toEqual(expectedResult)
    })
  })
})
