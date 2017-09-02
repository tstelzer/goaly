import {AnyAction, combineReducers} from 'redux'
import * as R from 'ramda'

import * as T from 'types'
import * as A from './Actions'
import * as FAKE from './fakeData'
import {flipProp} from 'util/object'

export const reps = (state: T.Checklist = [], action: AnyAction) => {
  const {type, payload} = action
  switch (type) {
    case A.TOGGLE:
      return R.map(flipProp('done'), state)
    default:
      return state
  }
}

export const todayReducer = combineReducers({
  reps,
})
