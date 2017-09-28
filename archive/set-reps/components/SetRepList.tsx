import * as React from 'react'
import {connect} from 'react-redux'

import {SetRepItem} from './SetRepItem'
import {model} from 'modules/set-reps/'
import {StoreSlice} from 'modules/core/'
import {main} from 'modules/main/global-selectors'
import {Store} from 'modules/main/store-types'

const mapState = (state: Store) => ({
  setReps: main.getSetRepsList(state),
})

interface Props {
  readonly setReps: any[],
}

const SetRepList: React.SFC<Props> = ({setReps}) => {
  const setRepsList = setReps.map(x => <SetRepItem key={x.id} setRep={x} />)
  return (
    <div>
      {...setRepsList}
    </div>
  )
}

export default connect(mapState)(SetRepList)
