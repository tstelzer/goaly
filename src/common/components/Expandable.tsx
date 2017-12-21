import * as React from 'react'

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

