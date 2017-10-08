import {keys} from 'ramda'

import {Entities, StateSlice, AllIds} from './types'

/** Returns entities keyed by their id. */
export const getEntities = <T>(state: StateSlice<T>): Entities<T> =>
  state.entities

/** Returns array of entities. */
export const getEntitiesList = <T>(state: StateSlice<T>): T[] =>
  state.allIds.map(id => state.entities[id])

/** Returns array of entity ids. */
export const getIds = <T>(state: StateSlice<T>): AllIds =>
  state.allIds

/** Returns an entity via its id. Curried function. */
export const getEntity = <T>(state: StateSlice<T>) => (id: string): T =>
  state.entities[id]
