import * as React from 'react'
import {cx, css as style} from 'emotion'

import {P} from 'common/components/Styled'

interface State {
  readonly isEditing: boolean,
  readonly transientValue: string,
  readonly height: number,
}

interface Props {
  readonly onDone: (value: string) => any,
  readonly children: string,
  readonly render?: (isEditing: boolean) => JSX.Element,
  readonly className?: string,
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
      height: 0,
    }
  }

  public setHeight = (element: null | HTMLElement) => {
    if (element !== null && this.state.height !== element.clientHeight) {
      this.setState({height: element.clientHeight})
    }
  }

  public render(): JSX.Element {
    // TODO: Does the render prop need more args?
    if (this.props.render) {
      return this.props.render(this.state.isEditing)
    }
    return this.state.isEditing
      ? (
        <textarea
          className={cx(this.props.className, style`height: ${this.state.height}px`)}
          defaultValue={this.props.children}
          onKeyDown={this.onKeyDown}
          onBlur={this.cancel}
        />
      )
      : (
        <div
          ref={e => this.setHeight(e)}
          className={this.props.className}
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
