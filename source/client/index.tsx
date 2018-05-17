import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import 'normalize.css'

import './reset.css'
import App from './App'

const root = document.getElementById('js-root')

ReactDOM.render(
  <App />,
  root,
)
