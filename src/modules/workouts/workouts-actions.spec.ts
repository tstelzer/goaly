import {hasIn} from 'ramda'

import * as actions from './workouts-actions'
import {Workout} from './workouts-model'

describe('workouts', () => {
  describe('action-creators', () => {
    it('creates an action to add a Workout', () => {
      const name = 'pushups'
      const description = 'some description'
      const workout = {id: '1', name, description}
      const result = actions.add(name, description, () => '1')
      const expectedResult = {
        type: actions.ADD,
        payload: {workout},
      }

      expect(result).toEqual(expectedResult)
    })

    it('creates an action to edit a Workout', () => {
      const workout: Workout = {
        id: '1',
        name: 'some name',
        description: 'some description',
      }
      const expectedResult = {
        type: actions.EDIT,
        payload: {workout},
      }
      const result = actions.edit(workout)

      expect(result).toEqual(expectedResult)
    })

    it('creates an action to remove a Workout', () => {
      const expectedResult = {
        type: actions.REMOVE,
        payload: {id: '1'},
      }
      const result = actions.remove("1")

      expect(result).toEqual(expectedResult)
    })
  })
})
