import * as React from 'react'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {v4 as hash} from 'uuid'
import {map, values} from 'ramda'

import {Store} from 'app/store/store-types'
import {sets} from 'app/selectors/global-selectors'
import {model} from 'modules/sets/'

interface Props {
  readonly set: model.Set
}

const mapState = (state: Store) => ({
  set: sets.getSet(state)('1'),
})

export const SetRepList: React.SFC<Props> = ({set}) => {
  const {id, description, name, repetitions} = set
  const reps = repetitions && map(
    r => <li key={hash()}>{r}</li>,
    values(repetitions),
  )

  return (
    <article>
      <h3>{name}</h3>
      <p>{description}</p>
      <ul>
        {reps}
      </ul>
    </article>
  )
}

export default connect(mapState)(SetRepList)
