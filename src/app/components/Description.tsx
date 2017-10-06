import * as React from 'react'
import {connect} from 'react-redux'

import {Expandable} from 'modules/core/components/'
import {Store} from 'app/store/store-types'
import {model} from 'modules/repetitions/'
import {repetitions} from 'app/selectors/global-selectors'

interface Props {
  readonly className: string
  readonly repetition: model.Repetition,
}

const mapState = (state: Store) => ({
  // TODO: refactor
  repetition: repetitions.getRepetition(state)(state.ui.description.selected),
})

export const Description: React.SFC<Props> = ({
  repetition,
  className,
}) => {
  const {name, description} = repetition
  return (
    <article className="w-45-rem b-1-px-gray">
      <h3 className="ta-c p-1-u">{name}</h3>
      <p>{description}</p>
      {/* <Expandable /> */}
    </article>
  )
}

export default connect(mapState)(Description)
