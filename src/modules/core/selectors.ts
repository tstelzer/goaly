import {keys} from 'ramda'

import {ById, StateSlice, AllIds} from './types'

// TODO: Properly type globalize.
/**
 * Globalizes selectors by applying the global state path
 * to the local selectors.
 * @arg {Object} selectors Object of selectors from module.
 */
export const globalize = <T>(selectors: any) =>
  /**
   * @arg {String} slice String literal representing the state path.
   * @returns {Object} Globalized selectors.
   */
  (slice: string) =>
    keys(selectors).reduce(
      (res, selector) => ({
        ...res,
        [selector]: (state: any) => selectors[selector](state[slice]),
      }),
      {},
    )

/** Returns entities keyed by their id. */
export const getEntities = <T>(state: StateSlice<T>): ById<T> => state.byId

/** Returns array of entities. */
export const getEntitiesList = <T>(state: StateSlice<T>): T[] =>
  state.allIds.map(id => state.byId[id])

/** Returns array of entity ids. */
export const getIds = <T>(state: StateSlice<T>): AllIds => state.allIds

/** Returns an entity via its id. Curried function. */
export const getEntity = <T>(state: StateSlice<T>) => (id: string): T =>
  state.byId[id]
