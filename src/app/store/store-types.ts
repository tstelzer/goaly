import {Entities, AllIds} from 'common'
import {state as RepetitionsState} from 'modules/repetitions/'
import {state as SetsState} from 'modules/sets/'

export interface Store {
  readonly repetitions: RepetitionsState,
  readonly sets: SetsState,
}
