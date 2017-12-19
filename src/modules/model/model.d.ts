import {FSA, Reducer, ID} from 'common'
import * as repetitionTypes from 'modules/model/repetition/repetition'
import * as setTypes from 'modules/model/set/set'

export interface ModelState {
  readonly repetitions: repetitionTypes.RepetitionState,
  readonly sets: setTypes.SetState,
}
