import {createSelector} from 'reselect'

import {DOMAIN} from './repetitions-constants'
import * as types from './repetitions-model'

export const allReps = (state: any) => state[DOMAIN]
