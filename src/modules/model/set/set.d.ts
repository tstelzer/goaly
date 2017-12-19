import {FSA, Reducer, ID} from 'common'
import {constants} from './set-constants'

/**
 * A set is an ordered collection of repetitions.
 * Each entry is uniquely identifiable by its slot,
 * which is why we can have more than one of the same
 * repetition per set. Sets can be empty.
 */
export interface Set {
  readonly id: string
  readonly name?: string
  readonly description?: string
  readonly repetitions?: {
    readonly [slot: number]: string
  }
}

export type AddSet = FSA<constants.ADD, {readonly set: Set}>

export type UpdateSet = FSA<constants.UPDATE, {readonly set: Set}>

export type RemoveSet = FSA<constants.REMOVE, {readonly id: string}>

/**
 * A SetRep, or set-repetition joins the repetitions and sets table.
 * @prop {String} id: PK: ID of set-rep.
 * @prop {String} setId FK: ID of set.
 * @prop {String} repId FK: ID of repetition.
 * @prop {Number} slot The order of the SetRep. Must be unique.
 * @prop {Number} iterations The number of iterations.
 */
// export interface SetRep {
//     readonly id: string
//     readonly repId: string
//     readonly setId: string
//     readonly slot?: number
//     readonly iterations?: number
// }

// export type AddSetrep = FSA<
//   constants.ADD_SETREP,
//   {readonly setId: string, readonly repId: string}
//   >

export interface SetState {
  readonly [id: string]: Set
}

export type SetReducer = Reducer<
  SetState,
  AddSet | UpdateSet | RemoveSet
>
