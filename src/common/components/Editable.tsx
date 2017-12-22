import * as React from 'react'
import {cx} from 'emotion'
import * as R from 'ramda'
import Textarea from 'react-textarea-autosize'

import {P, Em} from 'common/components/Styled'
import * as css from 'common/css'

interface State {
  readonly isEditing: boolean,
  readonly transientValue: string,
}

interface Props {
  readonly onDone: (value: string) => any,
  readonly children: string,

  /** String to display when children are undefined. */
  readonly placeholder?: string | JSX.Element,
  readonly render?: (isEditing: boolean) => JSX.Element,
  readonly className?: string,
}

class Editable extends React.Component<Props, State> {
  public static defaultProps = {
    onDone: (value: string) => undefined,
    placeholder: <Em>No Value</Em>,
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
        <Textarea
          className={cx(this.props.className, css.w._100)}
          defaultValue={this.props.children || ''}
          onKeyDown={this.onKeyDown}
          onBlur={this.cancel}
          tabIndex={0}
        />
      )
      : (
        <div
          className={this.props.className}
          onClick={this.edit}
          onFocus={this.edit}
        >
          {this.props.children || this.props.placeholder}
        </div>
      )
  }

  public componentWillReceiveProps(nextProps: Props): void {
    if (nextProps.children !== this.props.children) {
      this.setState({transientValue: nextProps.children})
    }
  }

  public onKeyDown = (event: Partial<KeyboardEvent>) => {
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
    this.setState({isEditing: false})
  }
}

export {Editable}
