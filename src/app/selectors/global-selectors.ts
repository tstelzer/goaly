import {keys} from 'ramda'
import {createSelector} from 'reselect'

import {selectors} from 'modules/core'
import {Store} from 'app/store/store-types'

export const repetitions = {
  getIds: (state: Store) =>
    selectors.getIds(state.repetitions),

  getRepetition: (state: Store) =>
    selectors.getEntity(state.repetitions),

  getRepetitions: (state: Store) =>
    selectors.getEntities(state.repetitions),

  getRepetitionsList: (state: Store) =>
    selectors.getEntitiesList(state.repetitions),
}

const getSelectedId = (state: Store) =>
  state.repetitions.ui.selectedRepetition

export const getSelected = (state: Store) =>
  repetitions.getRepetition(state)(getSelectedId(state))
