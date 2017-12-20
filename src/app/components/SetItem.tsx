import * as React from 'react'
import {connect} from 'react-redux'

import {Store} from 'app/store/store-types'
import {set} from 'modules/model'

interface OwnProps {
  readonly id: string
}

interface Props extends OwnProps {
  readonly set: set.Set
}

const mapState = (state: Store, ownProps: OwnProps) => ({
  set: set.selectors.getSet(state)(ownProps.id),
})

export class SetItem extends React.Component<Props> {
  public render(): JSX.Element {
    const {name, description} = this.props.set
    return (
      <article>
        <h3>{name}</h3>
        <p>{description}</p>
      </article>
    )
  }
}

export default connect(mapState)(SetItem)
