import * as React from 'react'
import {RouteComponentProps} from 'react-router-dom'
import {cx} from 'react-emotion'

import {Store} from 'app/store/store-types'
import {Styled, css, Expandable} from 'common/components'

const mapState = (state: Store) => {}

interface State {readonly showExpandable: boolean}

class WorkoutList extends React.Component<RouteComponentProps<any>, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      showExpandable: false,
    };
  }

  public handleClick = () =>
    this.setState({ showExpandable: !this.state.showExpandable });

  public render(): JSX.Element {
    return (
      <Styled.BorderSection className={css.smallContainer}>
        <h2>WORKOUTS</h2>
        <ol>
          <Styled.StripedListItem onClick={this.handleClick}>
            <Styled.Paragraph className={css.pointer}>workout one</Styled.Paragraph>
            <div>
              <Expandable show={this.state.showExpandable}>
                <div className={cx(css.sunken, css.grid)}>
                  <p>description:</p>
                  <p className={css.columnRight}>
                    A cool workout with many hard exercizes!
                  </p>
                  <ol className={css.columnSpanTwo}>
                    <li>set_1</li>
                    <li>set_2</li>
                    <li>set_3</li>
                    <li>set_4</li>
                    <li>set_5</li>
                  </ol>
                </div>
              </Expandable>
            </div>
          </Styled.StripedListItem>
        </ol>
      </Styled.BorderSection>
    );
  }
}

export default WorkoutList
