import {combineReducers} from 'redux'

import {allIds, entities, setReps, EntitiesState, AllIdsState, SetRepsState} from './sets-reducer'

export interface SetsState {
  readonly entities: EntitiesState,
  readonly allIds: AllIdsState,
  readonly setReps: SetRepsState,
}

export default combineReducers<SetsState>({
  entities,
  allIds,
  setReps,
})
