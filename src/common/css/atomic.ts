import {css, cx} from 'react-emotion'
import {curry} from 'ramda'

import {colors} from '../constants'

export const centered = css`text-align: center;`

/** * border */
export const b = {
  sm: {
    fg: css`border: 2px solid ${colors.foreground};`,
  },
  xs: {
    fg: css`border: 1px solid ${colors.foreground};`,
  },
}

/** font-family */
export const ff = {
  ui: css`
    font-family: -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "Helvetica",
    sans-serif;
  `,
  mono: css`
    font-family: monospace;
  `,
}

/** color */
export const co = {
  acc: css`color: ${colors.accent};`,
  fg: css`color: ${colors.foreground};`,
  fg_2: css`color: ${colors.foreground_lighter};`,
  bg: css`color: ${colors.background};`,
  hl: css`color: ${colors.highlight};`,
}

/** background-color */
export const bgco = {
  bg: css`background-color: ${colors.background};`,
  bg_2: css`background-color: ${colors.background_lighter};`,
}

/** macro: sunken element */
export const sunken = css`
  background-color: #f1f1f1;
  border-top: 1px solid #ddd;
`

/** max-width */
export const mw = {
  sm: css`max-width: 30rem;`,
  lg: css`max-width: 60rem;`,
}

/** macro: grid layouts */
export const grid = {
  half: css`
    display: grid;
    grid-template-columns: 50% 50%;
  `,
  third: css`
    display: grid;
    grid-template-columns: 33% 33% 33%;
  `,
}

/** macro: box */
export const boxed = {
  xs: css`padding: 0.5rem 0.75rem;`,
  sm: css`padding: 1rem 1.5rem;`,
  md: css`padding: 2rem 3rem;`,
}

/** grid-column */
export const col = {
  _1: css`grid-column: 1;`,
  _2: css`grid-column: 2;`,
  _3: css`grid-column: 3;`,
  _1_2: css`grid-column: 1 / span 2;`,
  _3_2: css`grid-column: 1 / span 2;`,
}

/** macro: flexbox */
export const flex = {
  col_nw: css`
    display: flex;
    flex-flow: column nowrap;
  `,
  col_w: css`
    display: flex;
    flex-flow: column wrap;
  `,
  row_nw: css`
    display: flex;
    flex-flow: row nowrap;
  `,
  row_w: css`
    display: flex;
    flex-flow: row wrap;
  `,
}

/** text-align */
export const ta = {
  l: css`text-align: left;`,
  c: css`text-align: center;`,
  r: css`text-align: right;`,
}

/** macro: flex row space-around */
export const flexRowAround = css`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
`

/** macro: flex row space-between */
export const flexRowBetween = css`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`

/** @hover cursor */
export const pointer = css`
  &:hover {cursor: pointer;}
`
