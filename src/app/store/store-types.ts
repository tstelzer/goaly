import {Entities, AllIds} from 'modules/core'
import * as repetitions from 'modules/repetitions/'

export interface Store {
  readonly repetitions: {
    readonly ui: {
      readonly selectedRepetition: string,
    },
    readonly entities: Entities<repetitions.model.Repetition>,
    readonly allIds: AllIds,
  }
}
