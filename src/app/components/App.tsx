import * as React from 'react'

import RepetitionList from 'modules/repetitions/components/RepetitionList'
import Description from 'app/components/Description'

import 'assets/normalize.css'
import 'assets/reset.scss'
import 'assets/base.scss'
import 'assets/utility.scss'

const App = () => (
  <div
    className='d-f ff-r jc-c ai-s'
  >
    <Description className='' />
    <RepetitionList />
  </div>
)

export default App
