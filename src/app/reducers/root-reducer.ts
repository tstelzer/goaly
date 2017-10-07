import {combineReducers} from 'redux'

import * as repetitions from 'modules/repetitions'
import {ui} from './ui-reducer'

export const reducers = combineReducers({
  repetitions: repetitions.reducer,
  ui,
})
