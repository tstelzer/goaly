/* tslint:disable no-expression-statement */
import {propEq, find} from 'ramda'

import {entities, allIds} from './sets-reducer'
import * as actions from './sets-actions'
import {Set} from './sets-model'

describe('sets', () => {
  describe('entities reducer', () => {

    it('adds a set', () => {
      const setOne: Set = {
        id: '1',
        name: 'name',
        description: 'description',
      }
      const setTwo: Set = {
        id: '2',
        name: 'other name',
        description: 'other description',
      }

      expect(entities({}, {
        type: actions.ADD,
        payload: {
          set: setOne
        },
      })).toEqual({
        '1': setOne
      })

      expect(entities({
        '1': setOne
      }, {
        type: actions.ADD,
        payload: {
          set: setTwo
        },
      })).toEqual({
        '1': setOne,
        '2': setTwo,
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

      expect(entities(state, {
        type: actions.ADD,
        payload: {
          set: {
            id: '1',
            name: 'another name',
            description: 'another description',
          }
        }
      })).toEqual(state)
    })

    it('updates a set', () => {
      const setOld: Set = {
        id: '1',
        name: 'old name',
        description: 'old description',
      }
      const state = {
        '1': setOld
      }

      expect(entities(state, {
        type: actions.EDIT,
        payload: {
          set: {
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
      expect(entities(state, {
        type: actions.EDIT,
        payload: {
          set: {
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
      expect(entities(state, {
        type: actions.EDIT,
        payload: {
          set: {
            id: '2',
            name: 'another name',
            description: 'another description',
          }
        }
      })).toEqual(state)
    })

    it('removes a set', () => {
      const state = {
        '1': {
          id: '1',
          name: 'name',
          description: 'description',
        }
      }
      expect(entities(state, {
        type: actions.REMOVE,
        payload: {id: '1'},
      })).toEqual({})
    })

  })

  describe('allIds reducer', () => {

    it('adds the id of a new set', () => {
      expect(allIds([], {
        type: actions.ADD,
        payload: {
          set: {
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
          set: {
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
