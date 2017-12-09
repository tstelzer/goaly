import * as React from 'react'
import styled, {css, injectGlobal, fontFace} from 'react-emotion'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

import {SetRepsList} from 'modules/sets'
import {RepetitionList} from 'modules/repetitions'

const Main = () => (
  <h1>Still Empty</h1>
)

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Main</Link></li>
        <li><Link to='/sets'>Sets</Link></li>
        <li><Link to='/reps'>Reps</Link></li>
      </ul>

      <Route exact={true} path='/' component={Main} />
      <Route path='/sets' component={SetRepsList} />
      <Route path='/reps' component={RepetitionList} />
    </div>
  </Router>
)

export default App
