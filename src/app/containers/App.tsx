/* tslint:disable */
import * as React from 'react'

import {SetRepsList} from 'modules/sets'
import {Route, Link} from 'modules/router'

import 'assets/normalize.css'
import 'assets/reset.scss'
import 'assets/base.scss'
import 'assets/utility.scss'

// TODO: Remove.
import 'assets/react-table.css'

let instances: React.Component[] = []

const Main = () => (
  <div>
    <h1>Main</h1>
  </div>
)

const Two = () => (
  <div>
    <h1>Two</h1>
  </div>
)

const Three = () => (
  <div>
    <h1>Three</h1>
  </div>
)

const App = () => (
  <div>
    <ul>
      <li><Link instances={instances} to='/'>Main</Link></li>
      <li><Link instances={instances} to='/two'>Two</Link></li>
      <li><Link instances={instances} to='/three'>Three</Link></li>
    </ul>

    <Route instances={instances} path='/' exact component={Main} />
    <Route instances={instances} path='/two' component={Two} />
    <Route instances={instances} path='/three' component={Three} />
  </div>
)

export default App
