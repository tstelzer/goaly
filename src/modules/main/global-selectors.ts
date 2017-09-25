import {keys} from 'ramda'
import {createSelector} from 'reselect'

import {StateSlice, StoreSlice, selectors} from 'modules/core'
import {Store} from 'modules/main/store-types'
import {model as setRepsModel} from 'modules/set-reps/'
import {model as setsModel} from 'modules/sets/'
import {model as repsModel} from 'modules/repetitions/'

export const sets = {
  getIds: (state: Store) =>
    selectors.getIds(state['sets']),

  getSet: (state: Store) =>
    selectors.getEntity(state['sets']),

  getSets: (state: Store) =>
    selectors.getEntities(state['sets']),

  getSetsList: (state: Store) =>
    selectors.getEntitiesList(state['sets']),
}

export const repetitions = {
  getIds: (state: Store) =>
    selectors.getIds(state['repetitions']),

  getRepetition: (state: Store) =>
    selectors.getEntity(state['repetitions']),

  getRepetitions: (state: Store) =>
    selectors.getEntities(state['repetitions']),

  getRepetitionsList: (state: Store) =>
    selectors.getEntitiesList(state['repetitions']),
}

export const setReps = {
  getIds: (state: Store) =>
    selectors.getIds(state['setReps']),

  getEntity: (state: Store) =>
    selectors.getEntity(state['setReps']),

  getEntities: (state: Store) =>
    selectors.getEntities(state['setReps']),

  getEntitiesList: (state: Store) =>
    selectors.getEntitiesList(state['setReps']),
}

export const main = {
  /** Returns a materialized set-rep. */
  getSetRepsList: createSelector(
    [setReps.getEntitiesList, repetitions.getRepetition, sets.getSet],
    (
      setReps: setRepsModel.SetRep[],
      getRepetition: (id: string) => repsModel.Repetition,
      getSet: (id: string) => setsModel.Set,
    ) =>
      setReps.map(setRep => {
        const {id, iterations, slot, setId, repId} = setRep
        return {
          id,
          iterations,
          slot,
          repetition: getRepetition(repId),
          set: getSet(setId),
        }
      }),
  ),
}
