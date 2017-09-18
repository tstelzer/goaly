import * as React from 'react'
import {Provider} from 'react-redux'
import {render} from 'react-dom'

import {App} from 'modules/main/components/App'
import {configureStore} from 'modules/main/configureStore'

/* tslint:disable:no-expression-statement */
render(
  <Provider store={configureStore}>
    <App />
  </Provider>,
  document.getElementById('js-root'),
)
