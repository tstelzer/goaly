import * as React from 'react'
import {Provider} from 'react-redux'
import * as ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'

import App from 'app/components/App'
import {configureStore} from 'app/store/configure-store'

const root = document.getElementById('js-root')

ReactDOM.render(
  <AppContainer>
    <Provider store={configureStore}>
      <App />
    </Provider>
  </AppContainer>,
  root,
)

configureStore.dispatch({
  type: '@model/ADD_REPETITION',
  payload: {
    repetition: {
      id: '104',
      name: 'Something',
    },
  },
})

if (module.hot) {
  module.hot.accept('app/components/App', () => {
    const NextApp = require<{readonly default: typeof App}>('app/components/App').default;
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
