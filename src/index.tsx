import * as React from 'react'
import {Provider} from 'react-redux'
import * as ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'

import App from 'app/components/App'
import {configureStore} from 'app/store'
import {fakeData} from 'assets'

const root = document.getElementById('js-root')

ReactDOM.render(
  <AppContainer>
    <Provider store={configureStore(fakeData)}>
      <App />
    </Provider>
  </AppContainer>,
  root,
)

if (module.hot) {
  module.hot.accept('app/components/App', () => {
    const NextApp = require<{readonly default: typeof App}>('app/components/App').default;
    ReactDOM.render(
      <AppContainer>
        <Provider store={configureStore()}>
          <NextApp />
        </Provider>
      </AppContainer>,
      root,
    );
  });
}
