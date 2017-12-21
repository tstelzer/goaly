import * as React from 'react'
import {connect} from 'react-redux'

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
    const updateName = (name: string) => update({...set, name})
    return (
      <article>
        <Editable onDone={updateName}>{set.name || ''}</Editable>
      </article>
    )
  }
}

export default connect(mapState, actions)(SetItem)
