import {StateSlice} from 'modules/core'
import * as repetitions from 'modules/repetitions/'

export interface Store {
  readonly repetitions: StateSlice<repetitions.model.Repetition>,
}
