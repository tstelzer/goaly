import {pickBy} from 'ramda'

import * as types from './set'
import * as common from 'common'
import {constants} from './set-constants'

export const sets: types.SetReducer = (s = {}, a) => {
  switch (a.type) {
    case constants.ADD:
      return !s[a.payload.set.id] ? common.add(s, a.payload.set) : s
    case constants.UPDATE:
      return s[a.payload.set.id] ? common.edit(s, a.payload.set) : s
    case constants.REMOVE:
      return pickBy((set, id) => id !== a.payload.id, s)
    default:
      return s
  }
}

export default sets

// export interface SetRepsState {
//   readonly [repetition: string]: {
//     readonly [index: number]: string
//   }
// }
// type SetRepsReducer = common.Reducer<SetRepsState, SetRepActions>

// /**
//  * Ordered hash of repetition ids on sets.
//  */
// export const setReps: SetRepsReducer = (s = {}, a) => {
//   switch (a.type) {
//     case types.ADD_SETREP:
//       return {
//         ...s,
//         [a.payload.setId]: {
//           ...common.addToOrdered(common.fixOrder(s[a.payload.setId]))(
//             a.payload.repId,
//           ),
//         },
//       }
//     default:
//       return s
//   }
// }
