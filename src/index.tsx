import * as React from 'react'
import {Provider} from 'react-redux'
import * as ReactDOM from 'react-dom'

import App from 'app/containers/App'
import {configureStore} from 'app/store/configureStore'

const root = document.getElementById('js-root')

/* tslint:disable:no-expression-statement */
ReactDOM.render(
  <Provider store={configureStore}>
    <App />
  </Provider>,
  root,
)
