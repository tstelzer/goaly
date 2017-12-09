import * as React from 'react'

interface State {
  expanded: boolean,
}

export class Expandable extends React.Component<React.SFC, State> {
  constructor(props: React.SFC) {
    super(props)
    this.state = {expanded: true}
  }

  onClick = () => this.setState({expanded: !this.state.expanded})

  render() {
    const {expanded} = this.state
    const children = expanded && this.props.children
      ? (
        <article className='p-v-1-em p-h-2-em'>
          {this.props.children}
        </article>
      )
      : ''
    const btnText = expanded ? 'Hide' : 'Show more'

    return (
      <div>
        <button
          onClick={() => this.onClick()}
          className='w-100 ta-c bg-gray p-1-u'
        >
          {btnText}
        </button>
        {children}
      </div>
    )
  }
}
