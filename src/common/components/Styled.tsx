import styled from 'react-emotion'

import {colors} from 'common/constants'
import {css} from 'common'

export const BorderSection = styled('section')`
  position: relative;
  ${css.bgco.bg};
  font-size: 1rem;
  margin-top: 2rem;
  padding-top: 1rem;
  ${css.b.sm.fg};

  & h2 {
    ${css.co.fg_2};
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

BorderSection.displayName = 'BorderSection'

export const LiStriped = styled('li')`
  &:not(:first-of-type) {
    border-top: 1px solid ${colors.foreground};
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
    background-color: ${colors.foreground};
  }
`

Button.displayName = 'Button'

export const SmallButton = styled('button')`
  padding: 0.25rem 0.5rem;
  &:hover {
    color: white;
    background-color: ${colors.foreground};
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
  border-top: 1px solid ${colors.foreground};
  &:hover {
    color: white;
    background-color: #1c1c1c;
    border-top: 1px solid ${colors.foreground};
  }
`

WideButton.displayName = 'WideButton'
