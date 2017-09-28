import * as React from 'react'

import {SetRep} from '../set-reps-model'

interface Props {
  readonly setRep: any
}

export const SetRepItem: React.SFC<Props> = ({setRep}) => {
  const {id, iterations, slot, set, repetition} = setRep
  return (
    <article className="set-rep">
      <h3>{repetition.name}</h3>
      <p>{repetition.description}</p>
      <p>Iterations: <strong>{iterations}</strong></p>
    </article>
  )
}
