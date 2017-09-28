import * as React from 'react'
import {v4 as hash} from 'uuid'

import {Repetition} from './Repetition'
import {model} from 'modules/repetitions/'

interface Props {
  readonly repetitions: model.Repetition[],
}

export const RepetitionList: React.SFC<Props> = ({repetitions}) => {
  const list = repetitions
    .map(x => <li key={hash()}><Repetition repetition={x}/></li>)
  return (
    <ul className="flex">
      {...list}
    </ul>
  )
}
