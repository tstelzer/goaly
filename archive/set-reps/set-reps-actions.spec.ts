import {hasIn} from 'ramda'

import * as actions from './set-reps-actions'
import {SetRep} from './set-reps-model'
import {Action} from 'common'

describe('set-reps', () => {
  describe('action-creators', () => {

    it('creates an action to add a set-rep', () => {
      const setId = '1'
      const repId = '1'
      const slot = 1
      const iterations = 1
      const hashFn = () => '1'
      const result = actions.add(setId, repId, slot, iterations, hashFn)
      const expectedAction: Action<actions.ADD> = {
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

      expect(result).toEqual(expectedAction)
    })

    it('creates an action to edit a set-rep', () => {
      const setRep: SetRep = {
        id: '1',
        setId: '1',
        repId: '1',
        slot: 1,
        iterations: 1,
      }
      const expectedAction = {
        type: actions.EDIT,
        payload: {setRep},
      }
      const result = actions.edit(setRep)

      expect(result).toEqual(expectedAction)
    })

    it('creates an action to remove a set-rep', () => {
      const expectedResult = {
        type: actions.REMOVE,
        payload: {id: '1'},
      }
      const result = actions.remove('1')

      expect(result).toEqual(expectedResult)
    })
  })
})
