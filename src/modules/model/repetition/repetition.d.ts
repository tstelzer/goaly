import {FSA, Reducer, ID} from 'common'
import {constants} from './repetition-constants'

/**
 * Target muscle group.
 */
export enum Muscle {
  'Abdominals' = 1,
  'Abductors' = 2,
  'Adductors' = 3,
  'Biceps' = 4,
  'Calves' = 5,
  'Forearms' = 6,
  'Glutes' = 7,
  'Hamstrings' = 8,
  'Lats' = 9,
  'Lower Back' = 10,
  'Middle Back' = 11,
  'Neck' = 12,
  'Quadriceps' = 13,
  'Shoulders' = 14,
  'Traps' = 15,
  'Triceps' = 16,
  'Chest' = 17,
}

/**
 * The aproximate skill level of the exercise.
 */
export enum Level {
  'Beginner' = 1,
  'Intermediate' = 2,
  'Expert' = 3,
}

/**
 * The type of the exercise.
 */
export enum ExerciseType {
  'Cardio' = 1,
  'Strength' = 2,
  'Stretching' = 3,
}

/**
 * A repetition is a single, controlled exercise.
 */
export interface Repetition {
  readonly id: string
  readonly name?: string
  readonly description?: string
  readonly level?: Level
  readonly type?: ExerciseType
  readonly muscles?: Muscle[]
}

export type AddRepetition = FSA<
  constants.ADD,
  {readonly repetition: Repetition}
>

export type UpdateRepetition = FSA<
  constants.UPDATE,
  {readonly repetition: Repetition}
>

export type RemoveRepetition = FSA<constants.REMOVE, {readonly id: string}>

export interface RepetitionState {
  readonly [id: string]: Repetition
}

export type RepetitionReducer = Reducer<
  RepetitionState,
  AddRepetition | UpdateRepetition | RemoveRepetition
>

export type AllRepetitionState = ID[]

export type AllRepetitionReducer = Reducer<
  AllRepetitionState,
  AddRepetition | RemoveRepetition
>