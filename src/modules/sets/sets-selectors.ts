import {createSelector} from 'reselect'

import {DOMAIN} from './sets-constants'
import * as types from './sets-model'

export const allSets = (state: any) => state[DOMAIN]
