import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import {reducers} from 'app/reducers/root-reducer'
import {fakeData} from './fakeData'

export const configureStore = createStore(
  reducers,
  fakeData,
  composeWithDevTools(),
)
