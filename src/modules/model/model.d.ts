import {FSA, Reducer, ID} from 'common'
import * as repetition from './repetition'
import * as set from './set'

export interface ModelState {
  readonly entities: {
    readonly repetitions: {readonly [id: string]: repetition.Repetition},
    readonly sets: {readonly [id: string]: set.Set},
  }
  readonly result: {
    readonly repetitions: repetition.RepetitionID[],
    readonly sets: set.SetID[],
  }
}

export type AllModelActions =
  | repetition.AllRepetitionActions
  | set.AllSetActions

export type ModelReducer = Reducer<ModelState, AllModelActions>
