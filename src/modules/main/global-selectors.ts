import {StateSlice, ById, AllIds, selectors} from 'modules/core'
import {selectors as fromRepetitions, model as repetitionsModel} from 'modules/repetitions/'
import {selectors as fromSetReps, model as setRepsModel} from 'modules/set-reps/'
import {selectors as fromWorkouts, model as workoutsModel} from 'modules/workouts/'
import {selectors as fromSets, model as setsModel} from 'modules/sets/'

export const setReps = selectors.globalize(fromSetReps)('setReps')
export const repetitions = selectors.globalize(fromRepetitions)('repetitions')
export const workouts = selectors.globalize(fromWorkouts)('workouts')
export const sets = selectors.globalize(fromSets)('sets')
