// import {combineReducers} from 'redux'

// import {Action, Reducer} from 'common'
// import {types, UiActions} from '../actions/ui-actions'
// import * as model from '../sets-model'

// export interface UiState {
//   readonly selectedSet: string
// }

// type UiReducer = Reducer<UiState, UiActions>

// /**
//  * Repetitions UI specific state.
//  */
// export const ui: UiReducer = (
//   s,
//   a,
// ) => {
//   switch (a.type) {
//     case types.SELECT: return {
//       ...s,
//       selectedRepetition: a.payload.id,
//     }
//     default: return s
//   }
// }
