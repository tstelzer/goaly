import {
  globalize,
  getEntities,
  getIds,
  getEntity,
  getEntitiesList,
} from './selectors'
import {StateSlice} from './types'

interface Dummy {
  id: string | number
  stringProp?: string
  numberProp?: number
  fnProp?: () => any
}

describe('core', () => {
  describe('selectors', () => {
    describe('getEntities', () => {
      it('gets all entities', () => {
        const one: Dummy = {
          id: '1',
          stringProp: '1',
          numberProp: 1,
          fnProp: () => {},
        }
        const two: Dummy = {
          id: '2',
          stringProp: '1',
          numberProp: 1,
          fnProp: () => {},
        }
        const state: StateSlice<Dummy> = {
          byId: {'1': one, '2': two},
          allIds: ['1', '2'],
        }

        expect(getEntities(state)).toEqual(state.byId)
      })

      describe('getIds', () => {
        it('gets all ids', () => {
          const one: Dummy = {
            id: '1',
            stringProp: '1',
            numberProp: 1,
            fnProp: () => {},
          }
          const two: Dummy = {
            id: '2',
            stringProp: '1',
            numberProp: 1,
            fnProp: () => {},
          }
          const state: StateSlice<Dummy> = {
            byId: {'1': one, '2': two},
            allIds: ['1', '2'],
          }

          expect(getIds(state)).toEqual(state.allIds)
        })
      })

      describe('getEntitiesList', () => {
        it('gets all entities as an array', () => {
          const one: Dummy = {
            id: '1',
            stringProp: '1',
            numberProp: 1,
            fnProp: () => {},
          }
          const two: Dummy = {
            id: '2',
            stringProp: '1',
            numberProp: 1,
            fnProp: () => {},
          }
          const state: StateSlice<Dummy> = {
            byId: {'1': one, '2': two},
            allIds: ['1', '2'],
          }

          const result: Dummy[] = getEntitiesList(state)
          const expected: Dummy[] = [one, two]

          expect(result).toEqual(expected)
        })
      })

      describe('getEntity', () => {
        it('gets a single entity via its id', () => {
          const one: Dummy = {
            id: '1',
            stringProp: '1',
            numberProp: 1,
            fnProp: () => {},
          }
          const two: Dummy = {
            id: '2',
            stringProp: '1',
            numberProp: 1,
            fnProp: () => {},
          }
          const state: StateSlice<Dummy> = {
            byId: {'1': one, '2': two},
            allIds: ['1', '2'],
          }

          const result: Dummy = getEntity(state)('1')
          const expected: Dummy = one

          expect(result).toEqual(expected)
        })
      })
    })

    describe('globalize', () => {
      it('delegates local selectors', () => {
        const state = {
          setReps: {
            byId: {'1': 'a', '2': 'b'},
            allIds: ['1', '2'],
          },
          repetitions: {
            byId: {'1': 'z', '2': 'x'},
            allIds: ['1', '2'],
          },
        }
        const selectors = {
          getIds,
          getEntities,
          getEntitiesList,
          getEntity,
        }

        const result: any = globalize(selectors)('setReps')

        expect(result.getIds(state)).toEqual(state.setReps.allIds)
        expect(result.getEntities(state)).toEqual(state.setReps.byId)
        expect(result.getEntitiesList(state)).toEqual(getEntitiesList(state.setReps))
        expect(result.getEntity(state)('2')).toEqual('b')
      })
    })
  })
})
