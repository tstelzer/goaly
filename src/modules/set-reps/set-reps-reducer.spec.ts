/* tslint:disable no-expression-statement */
import {propEq, find} from 'ramda'

import {byId, allIds} from './set-reps-reducer'
import * as actions from './set-reps-actions'
import {SetRep} from './set-reps-model'
import {Action} from '../core'

describe('set-reps', () => {
  describe('byId reducer', () => {

    it('adds a setRep with all parameters', () => {
      const setRepOne: SetRep = {
        id: '1',
        setId: '1',
        repId: '1',
        slot: 1,
        iterations: 1,
      }
      const setRepTwo: SetRep = {
        id: '2',
        setId: '1',
        repId: '1',
        slot: 2,
        iterations: 1,
      }
      const addAction1: Action<actions.ADD> = {
        type: actions.ADD,
        payload: {setRep: setRepOne},
      }
      const addAction2: Action<actions.ADD> = {
        type: actions.ADD,
        payload: {setRep: setRepTwo},
      }

      expect(byId({}, addAction1)).toEqual({
        '1': setRepOne
      })

      expect(byId(
        {'1': setRepOne},
        addAction2,
      )).toEqual({
        '1': setRepOne,
        '2': setRepTwo,
      })
    })

    it('drops the addAction when the id already exists', () => {
      const setRepOne: SetRep = {
        id: '1',
        setId: '1',
        repId: '1',
        slot: 1,
        iterations: 1,
      }
      const addAction1: Action<actions.ADD> = {
        type: actions.ADD,
        payload: {setRep: setRepOne},
      }
      const state = {'1': setRepOne}

      expect(byId(state, addAction1)).toEqual(state)
    })

    it('updates a set-rep', () => {
      const setRepOld: SetRep = {
        id: '1',
        setId: '1',
        repId: '1',
        slot: 1,
        iterations: 1,
      }
      const setRepNew: SetRep = {
        id: '1',
        setId: '2',
        repId: '2',
        slot: 1,
        iterations: 2,
      }
      const editAction1: Action<actions.EDIT> = {
        type: actions.EDIT,
        payload: {setRep: setRepNew},
      }
      const state = {'1': setRepOld}

      expect(byId(state, editAction1)).toEqual({
        '1': setRepNew,
      })
    })

    it('drops the editAction when the id does not exist', () => {
      const setRepOld: SetRep = {
        id: '1',
        setId: '1',
        repId: '1',
        slot: 1,
        iterations: 1,
      }
      const setRepNew: SetRep = {
        id: '2',
        setId: '2',
        repId: '2',
        slot: 1,
        iterations: 2,
      }
      const editAction1: Action<actions.EDIT> = {
        type: actions.EDIT,
        payload: {setRep: setRepNew},
      }
      const state = {'1': setRepOld}

      expect(byId(state, editAction1)).toEqual(state)
    })

    it('removes a set-rep', () => {
      const setRep: SetRep = {
        id: '1',
        setId: '1',
        repId: '1',
        slot: 1,
        iterations: 1,
      }
      const removeAction: Action<actions.REMOVE> = {
        type: actions.REMOVE,
        payload: {id: '1'},
      }
      const state = {'1': setRep}

      expect(byId(state, removeAction)).toEqual({})
    })

  })

  describe('allIds reducer', () => {

    it('adds the id of a new set-rep', () => {
      const addAction: Action<actions.ADD> = {
        type: actions.ADD,
        payload: {
          setRep: {
            id: '1',
            setId: '1',
            repId: '1',
            slot: 1,
            iterations: 1,
          }
        }
      }
      expect(allIds(
        [],
        addAction,
      )).toEqual(['1'])
    })

    it('drops the addAction if the id already exists', () => {
      const addAction: Action<actions.ADD> = {
        type: actions.ADD,
        payload: {
          setRep: {
            id: '1',
            setId: '1',
            repId: '1',
            slot: 1,
            iterations: 1,
          }
        }
      }

      expect(allIds(['1'], addAction)).toEqual(['1'])
    })

    it('removes an id', () => {
      expect(allIds(['1', '2', '3'], {
        type: actions.REMOVE,
        payload: {id: '1'}
      })).toEqual(['2', '3'])
    })

  })
})
