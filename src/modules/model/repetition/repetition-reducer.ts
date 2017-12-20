import * as types from './repetition-types'
import {constants} from './repetition-constants'
import * as R from 'ramda'

const initialState = {
  entities: {},
  result: [],
}

const getEntities = (state: types.RepetitionState) => state.entities.repetitions
const addEntity = (s: types.RepetitionState, e: types.Repetition) => ({
  result: s.result.concat(e.id),
  entities: {
    ...s.entities,
    [e.id]: e,
  },
})

const updateEntity = (s: types.RepetitionState, e: types.Repetition) => ({
  ...s,
  entities: {
    ...s.entities,
    [e.id]: e,
  },
})

const removeEntity = (s: types.RepetitionState, id: string) => ({
  result: s.result.filter(i => i !== id),
  entities: R.dissoc<{readonly [id: string]: types.Repetition}>(id, s.entities),
})

export const reducer: types.RepetitionReducer = (s = initialState, a) => {
  const repetitions = getEntities(s)
  switch (a.type) {
    case constants.ADD:
      return addEntity(s, a.payload.repetition)
    case constants.UPDATE:
      return updateEntity(s, a.payload.repetition)
    case constants.REMOVE:
      return removeEntity(s, a.payload.id)
    default: return s
  }
}
