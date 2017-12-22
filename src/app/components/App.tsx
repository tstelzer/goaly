import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import {injectGlobal} from 'emotion'

import 'normalize.css'
import './reset.css'

import {Container} from 'common/components'
import {co, bgco, ff} from 'common/css'
import {Workouts, Main} from 'app/routes'

/* tslint:disable no-unused-expression */
injectGlobal`
  body {
    font-size: 1.5em;
    ${co.fg};
    ${bgco.bg};
    ${ff.mono};
  };
`
/* tslint:enable no-unused-expression */


const App = () => (
  <Router>
    <Container>
      <ul>
        <li><Link
          className={co.acc}
          to='/'
        >
          Home
        </Link></li>
        <li><Link
          className={co.hl}
          to='/workouts'
        >
          Workouts
        </Link></li>
      </ul>

      <Route exact={true} path='/' component={Main} />
      <Route path='/workouts' component={Workouts} />
    </Container>
  </Router>
)

export default App
