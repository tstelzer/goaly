import {combineReducers} from 'redux'

import {repetitionReducer} from './repetition'
import {setReducer} from './set'
import * as types from './model'

export default combineReducers<types.ModelState>({
  repetitions: repetitionReducer,
  sets: setReducer,
})
