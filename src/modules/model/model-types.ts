import * as repetition from './repetition'
import * as set from './set'

export interface ModelState {
  repetitions: repetition.RepetitionState,
  sets: set.SetState,
}
