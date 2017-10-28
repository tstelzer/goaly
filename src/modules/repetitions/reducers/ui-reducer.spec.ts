/* tslint:disable no-expression-statement */
import {Action} from 'common'
import {Store} from 'app/store/store-types'
import {ui, UiState} from './ui-reducer'
import {types, SelectAction} from '../actions/ui-actions'
import * as model from '../repetitions-model'

describe('repetitions', () => {
  describe('ui reducer', () => {
    it('selects a repetition', () => {
      const state: UiState = {
        selectedRepetition: '1',
      }
      const action: SelectAction = {
        type: types.SELECT,
        payload: {id: '2'},
      }

      const result = ui(state, action)
      const expected: UiState = {
        selectedRepetition: '2',
      }

      expect(result).toEqual(expected)
    })
  })
})
