import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

import 'normalize.css'
import './reset.css'

import {Container} from 'common'
import {SetRepsList} from 'modules/sets'
import {WorkoutList} from 'modules/workout'

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
