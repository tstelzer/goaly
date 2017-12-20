import * as React from 'react'
import {connect} from 'react-redux'

import {Store} from 'app/store/store-types'
import * as model from 'modules/model'

interface Props {
  sets: any,
}

const mapState = (state: Store) => ({
  sets: model.set.getEntities(state),
})

export class SetList extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  public render(): JSX.Element {
    return (
      <h1>hi</h1>
    )
  }
}

export default connect(mapState)(SetList)
