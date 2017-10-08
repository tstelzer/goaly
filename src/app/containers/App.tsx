import * as React from 'react'

import Description from 'modules/repetitions/containers/Description'
import RepetitionList from 'modules/repetitions/containers/RepetitionList'

import 'assets/normalize.css'
import 'assets/reset.scss'
import 'assets/base.scss'
import 'assets/utility.scss'

const App = () => (
  <div className='d-f ff-r jc-c ai-s'>
    <Description />
    <RepetitionList />
  </div>
)

export default App
