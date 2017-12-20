import * as types from './set-types'
import {constants} from './set-constants'
import * as R from 'ramda'

const initialState = {
  entities: {},
  result: [],
}

const getEntities = (state: types.SetState) => state.entities.sets
const addEntity = (s: types.SetState, e: types.Set) => ({
  result: s.result.concat(e.id),
  entities: {
    ...s.entities,
    [e.id]: e,
  },
})

const updateEntity = (s: types.SetState, e: types.Set) => ({
  ...s,
  entities: {
    ...s.entities,
    [e.id]: e,
  },
})

const removeEntity = (s: types.SetState, id: string) => ({
  result: s.result.filter(i => i !== id),
  entities: R.dissoc<{readonly [id: string]: types.Set}>(id, s.entities),
})

export const reducer: types.SetReducer = (s = initialState, a) => {
  const sets = getEntities(s)
  switch (a.type) {
    case constants.ADD:
      return addEntity(s, a.payload.set)
    case constants.UPDATE:
      return updateEntity(s, a.payload.set)
    case constants.REMOVE:
      return removeEntity(s, a.payload.id)
    default: return s
  }
}
