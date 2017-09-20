import {createSelector} from 'reselect'

import {DOMAIN} from './set-reps-constants'
import * as types from './set-reps-model'

export const allSetReps = (state: any) => state[DOMAIN]
