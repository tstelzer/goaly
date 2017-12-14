import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import {injectGlobal} from 'emotion'

import 'normalize.css'
import './reset.css'

import {Container, css} from 'common'
import {SetRepsList} from 'modules/sets'
import {WorkoutList} from 'modules/workout'

/* tslint:disable no-unused-expression */
injectGlobal`
  body {
    ${css.co.fg};
    ${css.bgco.bg};
    ${css.ff.mono};
  };
`
/* tslint:enable no-unused-expression */

const Main = () => (
  <h1>A Horse! A Kingdom For A Horse!</h1>
)

const App = () => (
  <Router>
    <Container>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/workouts'>Workouts</Link></li>
      </ul>

      <Route exact={true} path='/' component={Main} />
      <Route path='/workouts' component={WorkoutList} />
    </Container>
  </Router>
)

export default App
