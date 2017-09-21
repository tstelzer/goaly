import * as selectors from './workouts-selectors'
import {Workout} from './workouts-model'
import {State, ById, AllIds} from 'modules/core'

describe('workouts', () => {
  describe('selectors', () => {

    it('selects all workouts', () => {
      const one: Workout = {id: '1', name: 'one', description: 'one'}
      const two: Workout = {id: '2', name: 'two', description: 'two'}
      const state: State<Workout> = {
        'byId': {'1': one, '2': two},
        'allIds': ['1', '2'],
      }

      expect(selectors.getEntities(state)).toEqual(state.byId)
    })

    it('selects all ids', () => {
      const one: Workout = {id: '1', name: 'one', description: 'one'}
      const two: Workout = {id: '2', name: 'two', description: 'two'}
      const state: State<Workout> = {
        'byId': {'1': one, '2': two},
        'allIds': ['1', '2'],
      }

      expect(selectors.getIds(state)).toEqual(state.allIds)
    })

  })
})
