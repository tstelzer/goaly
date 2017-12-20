import {combineReducers} from 'redux'

import * as repetition from './repetition'
import * as set from './set'

const model = combineReducers({
  repetition: repetition.reducer,
})

export default model

// export default combineReducers<types.ModelState>({
//   repetitions: repetitionReducer,
//   sets: setReducer,
// })
