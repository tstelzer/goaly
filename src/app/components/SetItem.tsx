import * as React from 'react'
import {connect} from 'react-redux'
import Select from 'react-select'

import {set, repetition} from 'modules/model'
import {Editable} from 'common/components'
import * as css from 'common/css'
import {Store} from 'app/store/store-types'

interface CProps {
  readonly id: string,
}
interface SProps {
  readonly set: set.Set,
  readonly repetitions: repetition.Repetition[],
}

const actions = {
  update: set.actions.updateSet,
}

const mapState = (state: Store, ownProps: CProps) => {
  const _set = set.selectors.getSet(state)(ownProps.id)
  const repetitions = _set.repetitions.map(id =>
    repetition.selectors.getRepetition(state)(id))
  return {
    set: _set,
    repetitions,
  }
}

export class SetItem extends React.Component<SProps & CProps & typeof actions> {
  public render(): JSX.Element {
    const {id, update, set, repetitions} = this.props

    const RepList = repetitions.map((repetition, index) => (
      <li key={repetition.id + index}>
        {repetition.name}
      </li>
    ))

    const updateName = (name: typeof set.name) =>
      update({...set, name})
    const updateDescription = (description: typeof set.description) =>
      update({...set, description})

    return (
      <div className={css.m.t._1}>
        <Editable onDone={updateName}>
          {set.name}
        </Editable>
        <Editable onDone={updateDescription}>
          {set.description}
        </Editable>
        <ul>{RepList}</ul>
      </div>
    )
  }
}

export default connect(mapState, actions)(SetItem)
