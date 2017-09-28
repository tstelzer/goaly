import * as React from 'react'
import {Provider} from 'react-redux'
import {render} from 'react-dom'

import App from 'app/components/App'
import {configureStore} from 'app/store/configureStore'

/* tslint:disable:no-expression-statement */
render(
  <Provider store={configureStore}>
    <App />
  </Provider>,
  document.getElementById('js-root'),
)
