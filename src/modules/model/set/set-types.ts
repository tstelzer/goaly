import {FSA, Reducer} from 'common'
import {constants} from './set-constants'
import * as repetition from 'modules/model/repetition'

export type SetID = string

/**
 * A set is an ordered collection of repetitions.
 * Each entry is uniquely identifiable by its slot,
 * which is why we can have more than one of the same
 * repetition per set. Sets can be empty.
 */
export interface Set {
  readonly id: SetID
  readonly name: string
  readonly description: string
  readonly repetitions: repetition.RepetitionID[]
}

export type AddSet = FSA<constants.ADD, {readonly set: Set}>

export type UpdateSet = FSA<constants.UPDATE, {readonly set: Set}>

export type RemoveSet = FSA<constants.REMOVE, {readonly id: string}>

export type AllSetActions =
  | AddSet
  | UpdateSet
  | RemoveSet

export interface SetState {
  readonly entities: {readonly [id: string]: Set}
  readonly result: SetID[],
}

export type SetReducer = Reducer<SetState, AllSetActions>
