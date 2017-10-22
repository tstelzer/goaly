/* tslint:disable no-expression-statement */
import {Action} from 'modules/core'
import {Store} from 'app/store/store-types'
import {ui, UiState} from './ui-reducer'
import * as actions from '../actions/ui-actions'
import * as model from '../repetitions-model'

describe('repetitions', () => {
  describe('ui reducer', () => {
    it('selects a repetition', () => {
      const state: UiState = {
        selectedRepetition: '1',
      }
      const action: Action<actions.SELECT> = {
        type: actions.SELECT,
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
