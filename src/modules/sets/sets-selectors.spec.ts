import * as selectors from './sets-selectors'
import {Set} from './sets-model'
import {State, ById, AllIds} from 'modules/core'

describe('repetitions', () => {
  describe('selectors', () => {

    it('selects all repetitions', () => {
      const one: Set = {id: '1', name: 'one', description: 'one'}
      const two: Set = {id: '2', name: 'two', description: 'two'}
      const state: State<Set> = {
        'byId': {'1': one, '2': two},
        'allIds': ['1', '2'],
      }

      expect(selectors.getEntities(state)).toEqual(state.byId)
    })

    it('selects all ids', () => {
      const one: Set = {id: '1', name: 'one', description: 'one'}
      const two: Set = {id: '2', name: 'two', description: 'two'}
      const state: State<Set> = {
        'byId': {'1': one, '2': two},
        'allIds': ['1', '2'],
      }

      expect(selectors.getIds(state)).toEqual(state.allIds)
    })

  })
})
