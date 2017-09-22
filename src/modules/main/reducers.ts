import {combineReducers} from 'redux'

import * as reps from 'modules/repetitions'
import * as sets from 'modules/sets'
import * as workouts from 'modules/workouts'

export const reducers = combineReducers({
    repetitions: reps.reducer,
    sets: sets.reducer,
    workouts: workouts.reducer,
})
