import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'

import rootReducer from './store-reducer'
import * as types from './store-types'

export const configureStore = (preloadedState?: types.Store) => {
  const enhancers = composeWithDevTools()

  const store = createStore(
    rootReducer,
    preloadedState,
    enhancers,
  )

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./store-reducer', () => {
        store.replaceReducer(require('./store-reducer').default)
      })
    }
  }

  return store
}
