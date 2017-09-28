/* tslint:disable no-expression-statement */
import {propEq, find} from 'ramda'

import {byId, allIds} from './workouts-reducer'
import * as actions from './workouts-actions'
import {Workout} from './workouts-model'

describe('workouts', () => {
  describe('byId reducer', () => {

    it('adds a workout', () => {
      const workoutOne: Workout = {
        id: '1',
        name: 'name',
        description: 'description',
      }
      const workoutTwo: Workout = {
        id: '2',
        name: 'other name',
        description: 'other description',
      }

      expect(byId({}, {
        type: actions.ADD,
        payload: {
          workout: workoutOne
        },
      })).toEqual({
        '1': workoutOne
      })

      expect(byId({
        '1': workoutOne
      }, {
        type: actions.ADD,
        payload: {
          workout: workoutTwo
        },
      })).toEqual({
        '1': workoutOne,
        '2': workoutTwo,
      })
    })

    it('drops the addAction when the id already exists', () => {
      const state = {
        '1': {
          id: '1',
          name: 'name',
          description: 'description',
        }
      }

      expect(byId(state, {
        type: actions.ADD,
        payload: {
          workout: {
            id: '1',
            name: 'another name',
            description: 'another description',
          }
        }
      })).toEqual(state)
    })

    it('updates a workout', () => {
      const workoutOld: Workout = {
        id: '1',
        name: 'old name',
        description: 'old description',
      }
      const state = {
        '1': workoutOld
      }

      expect(byId(state, {
        type: actions.EDIT,
        payload: {
          workout: {
            id: '1',
            name: 'new name',
          }
        }
      })).toEqual({
        '1': {
          id: '1',
          name: 'new name',
          description: 'old description',
        }
      })
      expect(byId(state, {
        type: actions.EDIT,
        payload: {
          workout: {
            id: '1',
            description: 'new description',
          }
        }
      })).toEqual({
        '1': {
          id: '1',
          name: 'old name',
          description: 'new description',
        }
      })
    })

    it('drops the editAction when the id does not exist', () => {
      const state = {
        '1': {
          id: '1',
          name: 'some name',
          description: 'some description'
        }
      }
      expect(byId(state, {
        type: actions.EDIT,
        payload: {
          workout: {
            id: '2',
            name: 'another name',
            description: 'another description',
          }
        }
      })).toEqual(state)
    })

    it('removes a workout', () => {
      const state = {
        '1': {
          id: '1',
          name: 'name',
          description: 'description',
        }
      }
      expect(byId(state, {
        type: actions.REMOVE,
        payload: {id: '1'},
      })).toEqual({})
    })

  })

  describe('allIds reducer', () => {

    it('adds the id of a new workout', () => {
      expect(allIds([], {
        type: actions.ADD,
        payload: {
          workout: {
            id: '1',
            name: 'name',
            description: 'description',
          }
        }
      })).toEqual(['1'])
    })

    it('drops the addAction if the id already exists', () => {
      expect(allIds(['1'], {
        type: actions.ADD,
        payload: {
          workout: {
            id: '1',
            name: 'name',
            description: 'description',
          }
        }
      })).toEqual(['1'])
    })

    it('removes an id', () => {
      expect(allIds(['1', '2', '3'], {
        type: actions.REMOVE,
        payload: {id: '1'}
      })).toEqual(['2', '3'])
    })

  })
})
