import {createSelector} from 'reselect'

import {DOMAIN} from './workouts-constants'
import * as types from './workouts-model'

export const allWorkouts = (state: any) => state[DOMAIN]
