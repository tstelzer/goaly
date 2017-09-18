import {combineReducers} from 'redux'

import * as reps from 'modules/repetitions'

export const reducers = combineReducers({
    [reps.constants.DOMAIN]: reps.reducer,
})
