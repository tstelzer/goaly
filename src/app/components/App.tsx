import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

import 'normalize.css'
import './reset.css'

import {Container} from 'common/components'
import {Workouts, Main} from 'app/routes'

const App = () => (
  <Router>
    <Container>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/workouts'>Workouts</Link></li>
      </ul>

      <Route exact={true} path='/' component={Main} />
      <Route path='/workouts' component={Workouts} />
    </Container>
  </Router>
)

export default App
