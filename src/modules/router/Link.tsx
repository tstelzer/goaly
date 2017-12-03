import * as React from 'react'

import {historyPush, historyReplace} from './history'

interface LinkProps {
  readonly instances: React.Component[],
  readonly to: string,
  readonly replace?: boolean,
}

export class Link extends React.Component<LinkProps, any> {
  render() {
    const {to, children} = this.props
    return (
      <a href={to} onClick={this.handleClick}>
        {children}
      </a>
    )
  }

  handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const {replace, to, instances} = this.props
    e.preventDefault()
    replace ? historyReplace(instances, to) : historyPush(instances, to)
  }
}
