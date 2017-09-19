import {combineReducers} from 'redux'

import * as reps from 'modules/repetitions'
import * as sets from 'modules/sets'

export const reducers = combineReducers({
    [reps.constants.DOMAIN]: reps.reducer,
    [sets.constants.DOMAIN]: sets.reducer,
})
