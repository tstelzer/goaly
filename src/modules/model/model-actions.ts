// import {curry} from 'ramda'
// import {v4} from 'uuid'

// import * as types from './model'
// import {constants} from './model-constants'

// export const addRepetition = (
//   name: string = '',
//   description: string = '',
//   hashFn: () => string = v4,
// ): types.AddRepetition => ({
//   type: constants.ADD_REPETITION,
//   payload: {
//     repetition: {
//       id: hashFn(),
//       name,
//       description,
//     },
//   },
// })

// export const updateRepetition = (
//   repetition: types.Repetition,
// ): types.UpdateRepetition => ({
//   type: constants.UPDATE_REPETITION,
//   payload: {repetition},
// })

// export const removeRepetition = (
//   id: string,
// ): types.RemoveRepetition => ({
//   type: constants.REMOVE_REPETITION,
//   payload: {id},
// })

// export const addSet = (
//   name: string = '',
//   description: string = '',
//   hashFn: () => string = v4,
// ): types.AddSet => ({
//   type: constants.ADD_SET,
//   payload: {
//     set: {
//       id: hashFn(),
//       name,
//       description,
//     },
//   },
// })

// export const updateSet = (
//   set: types.Set,
// ): types.UpdateSet => ({
//   type: constants.UPDATE_SET,
//   payload: {
//     set,
//   },
// })

// export const removeSet = (
//   id: string,
// ): types.RemoveSet => ({
//   type: constants.REMOVE_SET,
//   payload: {id},
// })

// export const addSetRep = (
//   setId: string,
//   repId: string,
// ): types.AddSetrep => ({
//   type: constants.ADD_SETREP,
//   payload: {setId, repId},
// })
