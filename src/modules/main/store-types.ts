import {StateSlice} from 'modules/core'
import {model as setRepsModel} from 'modules/set-reps/'
import {model as workoutsModel} from 'modules/workouts/'
import {model as setsModel} from 'modules/sets/'
import {model as repetitionsModel} from 'modules/repetitions/'

export interface Store {
  readonly setReps: StateSlice<setRepsModel.SetRep>,
  readonly sets: StateSlice<setsModel.Set>,
  readonly repetitions: StateSlice<repetitionsModel.Repetition>,
  readonly workouts: StateSlice<workoutsModel.Workout>,
}
