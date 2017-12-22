import * as React from 'react'
import {connect} from 'react-redux'
import Select from 'react-select'
import {css} from 'emotion'

import {set} from 'modules/model'
import {Editable} from 'common'
import {Store} from 'app/store/store-types'

interface CProps {readonly id: string}
interface SProps {readonly set: set.Set}

const actions = {
  update: set.actions.updateSet,
}

const mapState = (state: Store, ownProps: CProps) => ({
  set: set.selectors.getSet(state)(ownProps.id),
})

export class SetItem extends React.Component<SProps & CProps & typeof actions> {
  public render(): JSX.Element {
    const {id, update, set} = this.props

    const updateName = (name: typeof set.name) =>
      update({...set, name})
    const updateDescription = (description: typeof set.description) =>
      update({...set, description})

    return (
      <article>
        <Editable onDone={updateName}>
          {set.name}
        </Editable>
        <Editable onDone={updateDescription}>
          {set.description}
        </Editable>
      </article>
    )
  }
}

export default connect(mapState, actions)(SetItem)
