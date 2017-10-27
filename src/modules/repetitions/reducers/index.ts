import {combineReducers} from 'redux'

import {allIds, entities, EntitiesState, AllIdsState} from './repetitions-reducer'
import {ui, UiState} from './ui-reducer'

export interface RepetitionsState {
  readonly ui: UiState,
  readonly entities: EntitiesState,
  readonly allIds: AllIdsState,
}

export default combineReducers<RepetitionsState>({
  entities,
  allIds,
  ui,
})
