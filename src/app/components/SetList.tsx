import * as React from 'react'
import {connect} from 'react-redux'

import {Store} from 'app/store/store-types'
import {set} from 'modules/model'
import SetItem from './SetItem'

interface Props {
  readonly setList: string[],
  readonly className?: string,
}

const mapState = (state: Store) => ({
  setList: set.selectors.getAllIds(state),
})

export class SetList extends React.Component<Props> {
  public static displayName: 'SetList'
  public render(): JSX.Element {
    const listItems = this.props.setList.map(
      (id, index) => (<li key={id}><SetItem id={id} /></li>),
    )
    return (
      <ul className={this.props.className}>
        {listItems}
      </ul>
    )
  }
}

export default connect(mapState)(SetList)
