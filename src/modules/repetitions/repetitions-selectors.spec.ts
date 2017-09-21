import * as selectors from './repetitions-selectors'
import {Repetition} from './repetitions-model'
import {State, ById, AllIds} from 'modules/core'

describe('repetitions', () => {
  describe('selectors', () => {

    it('selects all repetitions', () => {
      const one: Repetition = {id: '1', name: 'one', description: 'one'}
      const two: Repetition = {id: '2', name: 'two', description: 'two'}
      const state: State<Repetition> = {
        'byId': {'1': one, '2': two},
        'allIds': ['1', '2'],
      }

      expect(selectors.getEntities(state)).toEqual(state.byId)
    })

    it('selects all ids', () => {
      const one: Repetition = {id: '1', name: 'one', description: 'one'}
      const two: Repetition = {id: '2', name: 'two', description: 'two'}
      const state: State<Repetition> = {
        'byId': {'1': one, '2': two},
        'allIds': ['1', '2'],
      }

      expect(selectors.getIds(state)).toEqual(state.allIds)
    })

  })
})
