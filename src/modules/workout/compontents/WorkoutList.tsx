import * as React from 'react'
import {RouteComponentProps} from 'react-router-dom'
import styled, {css} from 'react-emotion'

import {Store} from 'app/store/store-types'

const BorderSection = styled('section')`
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
    top: -0.7rem;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    padding-left: 1rem;
    padding-right: 1rem;
    background: inherit;
  }
`

const StripedListItem = styled('li')`
  padding: 1rem;
  &:not(:last-of-type) {
    border-bottom: 2px dashed #1c1c1c;
  }
  &:nth-of-type(even) {
    background-color: #e6f9fc;
  }
`

const smallContainer = css`
  width: 30rem;
  margin-left: auto;
  margin-right: auto;
`

const wideContainer = css`
  width: 60rem;
  margin-left: auto;
  margin-right: auto;
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
          <StripedListItem>workout_1 Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Soluta sit ab eveniet quibusdam. Quidem reprehenderit sequi
          dolorum explicabo accusamus officiis quia! Necessitatibus incidunt
          aut sequi pariatur dignissimos dolorum illo. Voluptatum!</StripedListItem>
          <StripedListItem>workout_2</StripedListItem>
          <StripedListItem>workout_3</StripedListItem>
          <StripedListItem>workout_4</StripedListItem>
          <StripedListItem>workout_5</StripedListItem>
        </ol>
      </BorderSection>
    )
  }
}

export default WorkoutList
