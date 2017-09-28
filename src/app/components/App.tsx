import * as React from 'react'
import {connect} from 'react-redux'

import {RepetitionList} from 'modules/repetitions/components/'
import {Store} from 'app/store/store-types'
import {repetitions as repSelectors} from 'app/selectors/global-selectors'

import 'assets/normalize.css'
import 'assets/reset.scss'
import 'assets/base.scss'
import 'assets/utility.scss'

const mapState = (state: Store) => ({
  repetitions: repSelectors.getRepetitionsList(state),
})

const App = ({repetitions}: {readonly repetitions: any}) =>
  <RepetitionList repetitions={repetitions}/>

export default connect(mapState)(App)
