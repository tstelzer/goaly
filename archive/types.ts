// import * as constants from 'constants'
//
// export interface Repetition {
//     readonly id: number
//     readonly name?: string
//     readonly description?: string
// }
//
// export interface Set {
//     readonly id: number
//     readonly name?: string
//     readonly description?: string
// }
//
// export interface Workout {
//     readonly id: number
//     readonly name?: string
//     readonly description?: string
// }
//
// export interface SetRep {
//     readonly set: number
//     readonly rep: number
//     readonly slot: number
//     readonly iterations: number
// }
//
// export interface WorkoutSet {
//     readonly workout: number
//     readonly set: number
//     readonly slot: number
// }
//
// export interface Day {
//     readonly id: Date
//     readonly workout?: number
// }
//
// export interface RepStatus {
//     readonly day: Date
//     readonly workoutSlot: number
//     readonly setSlot: number
//     readonly done: boolean
// }
//
// // export interface RepetitionState {
// //     readonly allIds: number[]
// //     readonly entities: any,
// // }
//
// export interface CreateAction {
//     readonly type: constants.Repetition.CREATE
//     readonly payload: Repetition
// }
//
// export interface UpdateAction {
//     readonly type: constants.Repetition.CREATE
//     readonly payload: Repetition
// }
//
// export interface OtherAction {
//     readonly type: constants.Repetition.OTHER_ACTION
// }
//
// export type Actions =
//     | CreateAction
//     | UpdateAction
//     | OtherAction
