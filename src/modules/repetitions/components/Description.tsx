import * as React from 'react'
import {connect} from 'react-redux'

import {repetitions, getSelected} from 'app/selectors/global-selectors'
import {Store} from 'app/store/store-types'
import {Expandable} from 'common/components/'
import {Repetition} from '../repetitions-model'

interface Props {
  readonly repetition: Repetition,
}

const mapState = (state: Store) => ({
  repetition: getSelected(state),
})

export const Description: React.SFC<Props> = ({repetition}) => {
  const {name, description} = repetition
  return (
    <article className="w-45-rem b-1-px-gray">
      <h3 className="ta-c p-1-u">{name}</h3>
      <p>{description}</p>
    </article>
  )
}

export default connect(mapState)(Description)
