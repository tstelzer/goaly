import {createSelector} from 'reselect'
import {values} from 'ramda'

import {Workout} from './workouts-model'
import {State, ById, AllIds} from 'modules/core'

export const getEntities = (state: State<Workout>): ById<Workout> => state.byId
export const getIds = (state: State<Workout>): AllIds => state.allIds
