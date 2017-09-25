import {main} from './global-selectors'
import {Store} from './store-types'
import {model as setsModel} from 'modules/sets/'
import {model as repsModel} from 'modules/repetitions/'

describe('global selectors', () => {
  describe('main', () => {
    describe('getSetRep', () => {
      it('returns a materialized set-rep', () => {
        const state: Store = {
          setReps: {
            byId: {
              1: {
                id: '1',
                setId: '1',
                repId: '1',
                iterations: 1,
                slot: 1,
              },
            },
            allIds: ['1'],
          },
          sets: {
            byId: {
              1: {
                id: '1',
                name: 'Upper body',
                description: '',
              },
            },
            allIds: ['1'],
          },
          workouts: {
            byId: {},
            allIds: [],
          },
          repetitions: {
            byId: {
              1: {
                id: '1',
                name: 'Pushups',
                description: '',
              },
            },
            allIds: ['1'],
          },
        }

        const result = main.getSetRepsList(state)
        const expected = [{
          id: '1',
          set: {
            id: '1',
            name: 'Upper body',
            description: '',
          },
          repetition: {
            id: '1',
            name: 'Pushups',
            description: '',
          },
          iterations: 1,
          slot: 1,
        }]

        expect(result).toEqual(expected)

      })
    })
  })
})
