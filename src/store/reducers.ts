import {combineReducers} from 'redux'

import * as reps from 'features/repetitions'

export const reducers = combineReducers({
    [reps.constants.DOMAIN]: reps.reducer
})
