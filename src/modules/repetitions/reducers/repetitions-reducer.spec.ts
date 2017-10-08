/* tslint:disable no-expression-statement */
import {propEq, find} from 'ramda'

import {entities, allIds} from './repetitions-reducer'
import * as actions from '../actions/repetitions-actions'
import {Repetition} from '../repetitions-model'

describe('repetitions', () => {
  describe('entities reducer', () => {

    it('adds a repetition', () => {
      const repetitionOne: Repetition = {
        id: '1',
        name: 'name',
        description: 'description',
      }
      const repetitionTwo: Repetition = {
        id: '2',
        name: 'other name',
        description: 'other description',
      }

      expect(entities({}, {
        type: actions.ADD,
        payload: {
          repetition: repetitionOne,
        },
      })).toEqual({
        1: repetitionOne,
      })

      expect(entities({
        1: repetitionOne,
      }, {
        type: actions.ADD,
        payload: {
          repetition: repetitionTwo,
        },
      })).toEqual({
        1: repetitionOne,
        2: repetitionTwo,
      })
    })

    it('drops the addAction when the id already exists', () => {
      const state = {
        1: {
          id: '1',
          name: 'name',
          description: 'description',
        },
      }

      expect(entities(state, {
        type: actions.ADD,
        payload: {
          repetition: {
            id: '1',
            name: 'another name',
            description: 'another description',
          },
        },
      })).toEqual(state)
    })

    it('updates a repetition', () => {
      const repetitionOld: Repetition = {
        id: '1',
        name: 'old name',
        description: 'old description',
      }
      const state = {
        1: repetitionOld,
      }

      expect(entities(state, {
        type: actions.EDIT,
        payload: {
          repetition: {
            id: '1',
            name: 'new name',
          },
        },
      })).toEqual({
        1: {
          id: '1',
          name: 'new name',
          description: 'old description',
        },
      })
      expect(entities(state, {
        type: actions.EDIT,
        payload: {
          repetition: {
            id: '1',
            description: 'new description',
          },
        },
      })).toEqual({
        1: {
          id: '1',
          name: 'old name',
          description: 'new description',
        },
      })
    })

    it('drops the editAction when the id does not exist', () => {
      const state = {
        1: {
          id: '1',
          name: 'some name',
          description: 'some description',
        },
      }
      expect(entities(state, {
        type: actions.EDIT,
        payload: {
          repetition: {
            id: '2',
            name: 'another name',
            description: 'another description',
          },
        },
      })).toEqual(state)
    })

    it('removes a repetition', () => {
      const state = {
        1: {
          id: '1',
          name: 'name',
          description: 'description',
        },
      }
      expect(entities(state, {
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
          },
        },
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
          },
        },
      })).toEqual(['1'])
    })

    it('removes an id', () => {
      expect(allIds(['1', '2', '3'], {
        type: actions.REMOVE,
        payload: {id: '1'},
      })).toEqual(['2', '3'])
    })

  })
})
