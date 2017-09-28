import * as React from 'react'

import * as model from '../repetitions-model'

interface Props {
  readonly repetition: model.Repetition,
}

const Title = ({title}: {readonly title: string}) =>
  <h3 className="uppercase m-b-1-em">{title}</h3>

const Paragraph = ({text}: {readonly text: string}) =>
  <p className="m-b-1-em">{text}</p>

export const Repetition: React.SFC<Props> = ({repetition}) => {
  const {name, description, targets} = repetition
  return (
    <article className="m-1-em mw-20-em b-1-px-gray p-1-em">
        <Title title={name} />
        <Paragraph text={description} />
        <p>Muscles:{targets && targets.map(x => ` ${model.Muscle[x]}`)}</p>
    </article>
  )
}
