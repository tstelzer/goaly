/* tslint:disable no-expression-statement */
import {propEq, find} from 'ramda'

import {byId, allIds} from './repetitions-reducer'
import * as actions from './repetitions-actions'
import * as model from './repetitions-model'

describe('repetitions', () => {
  describe('byId reducer', () => {

    it('adds a repetition', () => {
      const repetitionOne: model.Repetition = {
        id: '1',
        name: 'name',
        description: 'description',
      }
      const repetitionTwo: model.Repetition = {
        id: '2',
        name: 'other name',
        description: 'other description',
      }

      expect(byId({}, {
        type: actions.ADD,
        payload: {
          repetition: repetitionOne
        },
      })).toEqual({
        '1': repetitionOne
      })

      expect(byId({
        '1': repetitionOne
      }, {
        type: actions.ADD,
        payload: {
          repetition: repetitionTwo
        },
      })).toEqual({
        '1': repetitionOne,
        '2': repetitionTwo,
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
          repetition: {
            id: '1',
            name: 'another name',
            description: 'another description',
          }
        }
      })).toEqual(state)
    })

    it('updates a repetition', () => {
      const repetitionOld: model.Repetition = {
        id: '1',
        name: 'old name',
        description: 'old description',
      }
      const state = {
        '1': repetitionOld
      }

      expect(byId(state, {
        type: actions.EDIT,
        payload: {
          repetition: {
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
          repetition: {
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
          repetition: {
            id: '2',
            name: 'another name',
            description: 'another description',
          }
        }
      })).toEqual(state)
    })

    it('removes a repetition', () => {
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

    it('adds the id of a new repetition', () => {
      expect(allIds([], {
        type: actions.ADD,
        payload: {
          repetition: {
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
          repetition: {
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
