/* tslint:disable no-expression-statement */
import {edit, add} from './state'

describe('state', () => {
  describe('edit', () => {
    it('updates state with a given entity', () => {
      const state = {
        1: {name: 'jeff', id: '1'},
      }
      const entity = {
        id: '1',
        name: 'tom',
      }
      const expected = {
        1: {name: 'tom', id: '1'},
      }

      expect(edit(state, entity)).toEqual(expected)
    })
  })

  describe('add', () => {
    it('adds an entity to state', () => {
      const state = {
        1: {name: 'jeff', id: '1'},
      }
      const entity = {id: '2', name: 'tom'}
      const expected = {
        1: {name: 'jeff', id: '1'},
        2: {name: 'tom', id: '2'},
      }

      expect(add(state, entity)).toEqual(expected)
    })
  })
})
