import * as React from 'react'
import {Provider} from 'react-redux'
import * as ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'

import App from 'app/containers/App'
import {configureStore} from 'app/store/configureStore'

const root = document.getElementById('js-root')

/* tslint:disable:no-expression-statement */
ReactDOM.render(
  <AppContainer>
    <Provider store={configureStore}>
      <App />
    </Provider>
  </AppContainer>,
  root,
)

if (module.hot) {
  module.hot.accept('app/containers/App', () => {
    const NextApp = require<{readonly default: typeof App}>('app/containers/App').default;
    ReactDOM.render(
      <AppContainer>
        <Provider store={configureStore}>
          <NextApp />
        </Provider>
      </AppContainer>,
      root,
    );
  });
}
