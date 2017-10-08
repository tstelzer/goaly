import {combineReducers} from 'redux'

import {allIds, entities} from './repetitions-reducer'
import {ui} from './ui-reducer'

export default combineReducers({
  entities,
  allIds,
  ui,
})
