import {createSelector} from 'reselect'
import {values} from 'ramda'

import {Set} from './sets-model'
import {State, ById, AllIds} from 'modules/core'

export const getEntities = (state: State<Set>): ById<Set> => state.byId
export const getIds = (state: State<Set>): AllIds => state.allIds
