import * as React from 'react'

interface State {
  readonly isEditing: boolean,
  readonly transientValue: string,
}

interface Props {
  readonly onDone: (value: string) => any,
  readonly children: string,
  readonly render?: (isEditing: boolean) => JSX.Element,
}

class Editable extends React.Component<Props, State> {
  public static defaultProps = {
    children: '',
    onDone: (value: string) => undefined,
  }
  public static displayName = 'Editable'

  constructor(props: Props) {
    super(props)
    this.state = {
      isEditing: false,
      transientValue: '',
    }
  }

  public render(): JSX.Element {
    if (this.props.render) {
      return this.props.render(this.state.isEditing)
    }
    return this.state.isEditing
      ? (
        <input
          defaultValue={this.props.children}
          onKeyDown={this.onKeyDown}
        />
      )
      : (
        <div
          onClick={this.edit}
          onFocus={this.edit}
        >
          {this.props.children}
        </div>
      )
  }

  public componentWillReceiveProps(nextProps: Props): void {
    if (nextProps.children !== this.props.children) {
      this.setState({transientValue: nextProps.children})
    }
  }

  // TODO: Type the event. See SyntheticKeyboardEvent constructor.
  public onKeyDown = (event: any) => {
    // escape
    if (event.keyCode === 27) {this.cancel()}
    // enter
    if (event.keyCode === 13) {this.done(event)}
  }

  public edit = () => this.setState({
    isEditing: true,
  })

  private cancel = () => this.setState({
    isEditing: false,
    transientValue: this.props.children,
  })

  private done = (event: any) => {
    this.props.onDone(event.target.value)
    this.setState({
      isEditing: false,
      // not sure if we need to set it again
      transientValue: event.target.value,
    })
  }
}

export {Editable}
