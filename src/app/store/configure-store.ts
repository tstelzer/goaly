import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import root from './store-reducer'
import {fakeData} from './fake-data'

export const configureStore = createStore(
  root,
  fakeData,
  composeWithDevTools(),
)
