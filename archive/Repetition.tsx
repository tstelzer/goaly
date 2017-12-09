import * as React from 'react'
import {Dispatch} from 'redux'
import Textarea from 'react-textarea-autosize'

import * as actions from '../actions/repetitions-actions'
import * as model from '../repetitions-model'

interface RepetitionProps {
  readonly repetition: model.Repetition,
}

// export const Repetition: React.SFC<RepetitionProps> = ({repetition}) => {
//   const {name, description, targets} = repetition
//   const n = targets && targets.map(x => model.Muscle[x]).join(', ')
//   return (
//     <article className="m-l-1-u m-t-1-u">
//       <div className="b-b-1-px-gray ta-c">
//         <h3 className="uppercase fs-sm">{name}</h3>
//         {/* <p className="fs-sm fw-normal co-gray">{n}</p> */}
//       </div>
//     </article>
//   )
// }
