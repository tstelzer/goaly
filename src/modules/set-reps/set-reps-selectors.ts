import {createSelector} from 'reselect'
import {values} from 'ramda'

import {SetRep} from './set-reps-model'
import {State, ById, AllIds} from 'modules/core'

export const getEntities = (state: State<SetRep>): ById<SetRep> => state.byId
export const getIds = (state: State<SetRep>): AllIds => state.allIds
