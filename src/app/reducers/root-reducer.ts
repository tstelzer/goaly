import {combineReducers} from 'redux'

import * as repetitions from 'modules/repetitions'

export const reducers = combineReducers({
  repetitions: repetitions.reducer,
})
