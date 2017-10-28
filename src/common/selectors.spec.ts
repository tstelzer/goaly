/* tslint:disable no-expression-statement */
import {
  getEntities,
  getIds,
  getEntity,
  getEntitiesList,
} from './selectors'
import {StateSlice} from './types'

interface Dummy {
  readonly id: string | number
  readonly stringProp?: string
  readonly numberProp?: number
  readonly fnProp?: () => any
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
          entities: {1: one, 2: two},
          allIds: ['1', '2'],
          ui: {},
        }

        expect(getEntities(state)).toEqual(state.entities)
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
            entities: {1: one, 2: two},
            allIds: ['1', '2'],
            ui: {},
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
            entities: {1: one, 2: two},
            allIds: ['1', '2'],
            ui: {},
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
            entities: {1: one, 2: two},
            allIds: ['1', '2'],
            ui: {},
          }

          const result: Dummy = getEntity(state)('1')
          const expected: Dummy = one

          expect(result).toEqual(expected)
        })
      })
    })
  })
})
