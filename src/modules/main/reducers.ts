import {combineReducers} from 'redux'

import * as reps from 'modules/repetitions'
import * as sets from 'modules/sets'
import * as workouts from 'modules/workouts'

export const reducers = combineReducers({
    [reps.constants.DOMAIN]: reps.reducer,
    [sets.constants.DOMAIN]: sets.reducer,
    [workouts.constants.DOMAIN]: workouts.reducer,
})
