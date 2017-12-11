import * as React from 'react'
import emotion from 'react-emotion'

import {Styled} from 'common/components'

interface Props {
  readonly show: boolean,
  readonly children: JSX.Element,
}

export const Expandable: React.SFC<Props> = ({show, children}) => {
  return (
    <div>
      {show && children || ''}
    </div>
  )
}

