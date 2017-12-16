import * as React from 'react'
import {connect} from 'react-redux'
import {RouteComponentProps} from 'react-router-dom'
import {cx, css as style} from 'react-emotion'

import {Store} from 'app/store/store-types'
import {css} from 'common/'
import {P, BorderSection, LiStriped} from 'common/components/Styled'
import {Editable} from 'common/components/Editable'
import * as selectors from 'app/selectors/global-selectors'
import {model as repsModel, actions} from 'modules/repetitions/'

const mapState = (state: Store) => ({
  getRepetition: selectors.repetitions.getRepetition(state),
})

interface Props extends RouteComponentProps<any> {
  readonly getRepetition: (id: string | number) => repsModel.Repetition,
  readonly edit: any,
}

interface State {readonly showExpandable: boolean}

class WorkoutList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showExpandable: false,
    };
  }

  public render(): JSX.Element {
    const rep = this.props.getRepetition(1)
    return (
      <div>
        <BorderSection className={css.mw.sm}>
          <h2>WORKOUTS</h2>
          <ol>
            <LiStriped>
              <P className={css.ta.c}>rep.</P>
              <Editable
                onDone={value => this.props.edit({...rep, description: value})}
                className={cx(style`width: 100%; border: none;`)}
              >
                {rep.description || ''}
              </Editable>
            </LiStriped>
          </ol>
        </BorderSection>
      </div>
    );
  }
}

export default connect(mapState, {edit: actions.edit})(WorkoutList)
