import styled from 'react-emotion'

import {colors} from 'common/constants'
import * as css from 'common/css'

export const H3 = styled('h3')`
  ${css.fs.xl}
  text-align: center;
`

export const Em = styled('em')`
  ${css.co.hl}
`

export const Article = styled('article')`
  ${css.bgco.bg}
`

/**
 * Section Element with inset h2 title.
 */
export const BorderSection = styled('section')`
  position: relative;
  ${css.bgco.bg_2}
  font-size: 1rem;
  ${css.m.t._2}
  padding-top: 1rem;
  ${css.b.sm.fg}

  & h2 {
    ${css.co.fg_2}
    ${css.fs.xl}
    background: inherit;
    text-transform: uppercase;

    position: absolute;
    display: inline-block;
    top: -0.7rem;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

BorderSection.displayName = 'BorderSection'

export const LiStriped = styled('li')`
  &:not(:first-of-type) {
    border-top: 1px solid ${colors.foreground}
  }
  &:nth-of-type(even) {
    background-color: #f7feff;
  }
`

LiStriped.displayName = 'LiStriped'

export const Button = styled('button') `
  padding: 0.25rem 0.5rem;
  &:hover {
    color: white;
    background-color: ${colors.foreground}
  }
`

Button.displayName = 'Button'

export const SmallButton = styled('button')`
  padding: 0.25rem 0.5rem;
  &:hover {
    color: white;
    background-color: ${colors.foreground}
  }
`

SmallButton.displayName = 'SmallButton'

export const P = styled('p') `
  padding: 0.5rem 0.75rem;
`

P.displayName = 'P'

export const WideButton = styled('button')`
  width: 100%;
  padding: 0.25rem 0.5rem;
  border-top: 1px solid ${colors.foreground}
  &:hover {
    color: white;
    background-color: #1c1c1c;
    border-top: 1px solid ${colors.foreground}
  }
`

WideButton.displayName = 'WideButton'
