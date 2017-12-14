import * as React from 'react'
import {RouteComponentProps} from 'react-router-dom'
import {cx} from 'react-emotion'

import {Store} from 'app/store/store-types'
import {css} from 'common/'
import {P, BorderSection, LiStriped} from 'common/components/Styled'

const mapState = (state: Store) => {}

interface State {readonly showExpandable: boolean}

class WorkoutList extends React.Component<RouteComponentProps<any>, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      showExpandable: false,
    };
  }

  public render(): JSX.Element {
    return (
      <div>
        <BorderSection className={css.mw.sm}>
          <h2>WORKOUTS</h2>
          <ol>
            <LiStriped>
              <P className={css.ta.c}>workout one</P>
              <P>
                A cool workout with many hard exercizes!
              </P>
            </LiStriped>
          </ol>
        </BorderSection>
      </div>
    );
  }
}

export default WorkoutList
