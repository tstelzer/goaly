import {createSelector} from 'reselect'
import {values} from 'ramda'

import {Repetition} from './repetitions-model'
import {State, ById, AllIds} from 'modules/core'

export const getEntities = (state: State<Repetition>): ById<Repetition> => state.byId
export const getIds = (state: State<Repetition>): AllIds => state.allIds
