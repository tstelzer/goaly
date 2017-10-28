/* tslint:disable no-expression-statement */
import {propEq, find} from 'ramda'

import {Action, AllIds} from 'common'
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
      const actionOne: actions.AddAction = {
        type: actions.types.ADD,
        payload: {
          repetition: repetitionOne,
        },
      }
      const actionTwo: actions.AddAction = {
        type: actions.types.ADD,
        payload: {
          repetition: repetitionTwo,
        },
      }

      expect(entities({}, actionOne))
        .toEqual({
          1: repetitionOne,
        })
      expect(entities({1: repetitionOne}, actionTwo))
        .toEqual({
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
      const action: actions.AddAction = {
        type: actions.types.ADD,
        payload: {
          repetition: {
            id: '1',
            name: 'another name',
            description: 'another description',
          },
        },
      }

      expect(entities(state, action)).toEqual(state)
    })

    it('updates a repetition', () => {
      const repetitionOld: Repetition = {
        id: '1',
        name: 'old name',
        description: 'old description',
      }
      const state = {1: repetitionOld}
      const action1: actions.EditAction = {
        type: actions.types.EDIT,
        payload: {
          repetition: {
            id: '1',
            name: 'new name',
          },
        },
      }
      const action2: actions.EditAction = {
        type: actions.types.EDIT,
        payload: {
          repetition: {
            id: '1',
            description: 'new description',
          },
        },
      }

      expect(entities(state, action1)).toEqual({
        1: {
          id: '1',
          name: 'new name',
          description: 'old description',
        },
      })
      expect(entities(state, action2)).toEqual({
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
      const action: actions.EditAction = {
        type: actions.types.EDIT,
        payload: {
          repetition: {
            id: '2',
            name: 'another name',
            description: 'another description',
          },
        },
      }

      expect(entities(state, action)).toEqual(state)
    })

    it('removes a repetition', () => {
      const state = {
        1: {
          id: '1',
          name: 'name',
          description: 'description',
        },
      }
      const action: actions.RemoveAction = {
        type: actions.types.REMOVE,
        payload: {id: '1'},
      }

      expect(entities(state, action)).toEqual({})
    })

  })

  describe('allIds reducer', () => {

    it('adds the id of a new repetition', () => {
      const action: actions.AddAction = {
        type: actions.types.ADD,
        payload: {
          repetition: {
            id: '1',
            name: 'name',
            description: 'description',
          },
        },
      }

      expect(allIds([], action)).toEqual(['1'])
    })

    it('drops the addAction if the id already exists', () => {
      const state: AllIds = ['1']
      const action: actions.AddAction = {
        type: actions.types.ADD,
        payload: {
          repetition: {
            id: '1',
            name: 'name',
            description: 'description',
          },
        },
      }

      expect(allIds(state, action)).toEqual(['1'])
    })

    it('removes an id', () => {
      const state: AllIds = ['1', '2', '3']
      const action: actions.RemoveAction = {
        type: actions.types.REMOVE,
        payload: {id: '1'},
      }

      expect(allIds(state, action)).toEqual(['2', '3'])
    })

  })
})
