import * as React from 'react'
import emotion from 'react-emotion'

interface State {
  readonly expanded: boolean,
}

export class Expandable extends React.Component<any, State> {
  public readonly state = {
    expanded: false,
  }

  public readonly onClick = () => this.setState({expanded: !this.state.expanded})

  public render(): JSX.Element {
    const {expanded} = this.state
    const children = expanded && this.props.children
      ? (
        <article>
          {this.props.children}
        </article>
      )
      : ''
    const btnText = expanded ? 'hide details' : 'show details'

    return (
      <div>
        <button onClick={this.onClick}>
          {btnText}
        </button>
        <div>
          {children}
        </div>
      </div>
    )
  }
}

