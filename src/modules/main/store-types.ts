import {StateSlice} from 'modules/core'
import * as setReps from 'modules/set-reps/'
import * as workouts from 'modules/workouts/'
import * as sets from 'modules/sets/'
import * as repetitions from 'modules/repetitions/'

export interface Store {
  readonly setReps: StateSlice<setReps.model.SetRep>,
  readonly sets: StateSlice<sets.model.Set>,
  readonly repetitions: StateSlice<repetitions.model.Repetition>,
  readonly workouts: StateSlice<workouts.model.Workout>,
}
