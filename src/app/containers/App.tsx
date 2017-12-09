import * as React from 'react'
import styled, {css, injectGlobal, fontFace} from 'react-emotion'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

import {SetRepsList} from 'modules/sets'

const Main = () => (
  <h1>A Horse! A Kingdom For A Horse!</h1>
)

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Main</Link></li>
        <li><Link to='/sets'>Sets</Link></li>
      </ul>

      <Route exact={true} path='/' component={Main} />
      <Route path='/sets' component={SetRepsList} />
    </div>
  </Router>
)

export default App
