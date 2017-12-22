import * as React from 'react'
import {cx} from 'emotion'

import {SetList} from 'app/components'
import {BorderSection, H3, Em, Article} from 'common/components'
import * as css from 'common/css'

export const Workouts = () => (
  <BorderSection>
    <h2>Sets</h2>
    <H3>Several exercises done <Em>in series</Em>.</H3>
    <Article className={cx(css.b.t.sm.fg, css.m.t._2, css.box.sm)}>
      <SetList />
    </Article>
  </BorderSection>
)
