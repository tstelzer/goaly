import * as React from 'react'
import {RouteComponentProps} from 'react-router-dom'
import emotion, {css, cx} from 'react-emotion'

import {Store} from 'app/store/store-types'
import {Expandable} from 'common/components'

const sunken = css`
  background-color: #f1f1f1;
  border-top: 1px solid #ddd;
`

const BorderSection = emotion('section')`
  position: relative;
  font-size: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  background-color: white;
  border: 2px solid #1c1c1c;

  & h2 {
    position: absolute;
    display: inline-block;
    font-size: 1rem;
    top: -0.6rem;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    padding-left: 1rem;
    padding-right: 1rem;
    background: inherit;
  }
`

const StripedListItem = emotion('li')`
  &:not(:first-of-type) {
    border-top: 1px solid #ccc;
  }
  &:nth-of-type(even) {
    background-color: #f7feff;
  }
`

const centered = css`text-align: center;`

const smallContainer = css`
  ${centered};
  width: 30rem;
  margin-left: auto;
  margin-right: auto;
`

const wideContainer = css`
  width: 60rem;
  margin-left: auto;
  margin-right: auto;
`

const grid = css`
  display: grid;
  grid-template-columns: 50% 50%;
`

const columnRight = css`
  grid-column: 2 / 3;
`

const columnSpanTwo = css`
  grid-column: 1 / span 2;
`

const RowSpaceBetween = emotion('li')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`

const mapState = (state: Store) => {}

class WorkoutList extends React.Component<RouteComponentProps<any>> {
  public readonly state: {
  }

  public render(): JSX.Element {
    return (
      <BorderSection className={smallContainer}>
        <h2>WORKOUTS</h2>
        <ol>
          <StripedListItem>
            <RowSpaceBetween>
              <button>edit</button>
              <span>workout_1</span>
              <button>delete</button>
            </RowSpaceBetween>
            <Expandable>
              <div className={cx(sunken, grid)}>
                <p>description:</p>
                <p className={columnRight}>A cool workout with many hard exercizes!</p>
                <ol className={columnSpanTwo}>
                  <li>set_1</li>
                  <li>set_2</li>
                  <li>set_3</li>
                  <li>set_4</li>
                  <li>set_5</li>
                </ol>
              </div>
            </Expandable>
          </StripedListItem>
          <StripedListItem>
            <RowSpaceBetween>
              <button>edit</button>
              <span>workout_2</span>
              <button>delete</button>
            </RowSpaceBetween>
            <Expandable>
              <div className={cx(sunken, grid)}>
                <p>description:</p>
                <p className={columnRight}>A cool workout with many hard exercizes!</p>
                <ol className={columnSpanTwo}>
                  <li>set_1</li>
                  <li>set_2</li>
                  <li>set_3</li>
                  <li>set_4</li>
                  <li>set_5</li>
                </ol>
              </div>
            </Expandable>
          </StripedListItem>
          <StripedListItem>
            <RowSpaceBetween>
              <button>edit</button>
              <span>workout_2</span>
              <button>delete</button>
            </RowSpaceBetween>
            <Expandable>
              <div className={cx(sunken, grid)}>
                <p>description:</p>
                <p className={columnRight}>A cool workout with many hard exercizes!</p>
                <ol className={columnSpanTwo}>
                  <li>set_1</li>
                  <li>set_2</li>
                  <li>set_3</li>
                  <li>set_4</li>
                  <li>set_5</li>
                </ol>
              </div>
            </Expandable>
          </StripedListItem>
        </ol>
      </BorderSection>
    )
  }
}

export default WorkoutList
