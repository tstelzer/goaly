import {combineReducers} from 'redux'

import * as repetition from './repetition'
import * as set from './set'
import * as types from './model-types'

const model = combineReducers<types.ModelState>({
  repetitions: repetition.reducer,
  sets: set.reducer,
})

export default model
