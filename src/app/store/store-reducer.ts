import {combineReducers} from 'redux'

import {modelReducer} from 'modules/model'
import * as types from './store'

export const root = combineReducers<types.Store>({
  model: modelReducer,
})

export default root
