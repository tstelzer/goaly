import * as selectors from './set-reps-selectors'
import {SetRep} from './set-reps-model'
import {State, ById, AllIds} from 'modules/core'

describe('set-reps', () => {
  describe('selectors', () => {

    it('selects all set-reps', () => {
      const one: SetRep = {
        id: '1',
        setId: '1',
        repId: '1',
        slot: 1,
        iterations: 1,
      }
      const two: SetRep = {
        id: '2',
        setId: '1',
        repId: '1',
        slot: 2,
        iterations: 1,
      }
      const state: State<SetRep> = {
        'byId': {'1': one, '2': two},
        'allIds': ['1', '2'],
      }

      expect(selectors.getEntities(state)).toEqual(state.byId)
    })

    it('selects all ids', () => {
      const one: SetRep = {
        id: '1',
        setId: '1',
        repId: '1',
        slot: 1,
        iterations: 1,
      }
      const two: SetRep = {
        id: '2',
        setId: '1',
        repId: '1',
        slot: 2,
        iterations: 1,
      }
      const state: State<SetRep> = {
        'byId': {'1': one, '2': two},
        'allIds': ['1', '2'],
      }

      expect(selectors.getIds(state)).toEqual(state.allIds)
    })

  })
})
