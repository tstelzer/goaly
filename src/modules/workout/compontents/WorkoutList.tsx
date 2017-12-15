import * as React from 'react'
import {RouteComponentProps} from 'react-router-dom'
import {cx} from 'react-emotion'

import {Store} from 'app/store/store-types'
import {css} from 'common/'
import {P, BorderSection, LiStriped} from 'common/components/Styled'
import {Editable} from 'common/components/Editable'

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
              <Editable
                onDone={value => console.log('got a value', value)}
              >
                A cool workout with many hard exercizes!
              </Editable>
            </LiStriped>
          </ol>
        </BorderSection>
      </div>
    );
  }
}

export default WorkoutList
