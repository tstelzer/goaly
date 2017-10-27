import {combineReducers} from 'redux'

import * as repetitions from 'modules/repetitions'
import * as sets from 'modules/sets'
import {Store} from '../store/store-types'

export const reducers = combineReducers<Store>({
  repetitions: repetitions.reducer,
  sets: sets.reducer,
})
