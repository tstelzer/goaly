import {css, cx} from 'react-emotion'

import {colors} from './constants'

export const centered = css`text-align: center;`

export const b = {
  sm: {
    fg: css`border: 2px solid ${colors.fg};`,
  },
  xs: {
    fg: css`border: 1px solid ${colors.fg};`,
  },
}

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

export const co = {
  accent: css`color: ${colors.accent};`,
  fg: css`color: ${colors.fg};`,
  fg_2: css`color: ${colors.fg_2};`,
  bg: css`color: ${colors.bg};`,
}

export const bgco = {
  bg: css`background-color: ${colors.bg};`,
  bg_2: css`background-color: ${colors.bg_2};`,
}

export const sunken = css`
  background-color: #f1f1f1;
  border-top: 1px solid #ddd;
`

export const mw = {
  sm: css`max-width: 30rem;`,
  lg: css`max-width: 60rem;`,
}

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

export const col = {
  _1: css`grid-column: 1;`,
  _2: css`grid-column: 2;`,
  _3: css`grid-column: 3;`,
  _1_2: css`grid-column: 1 / span 2;`,
  _3_2: css`grid-column: 1 / span 2;`,
}

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

export const ta = {
  l: css`text-align: left;`,
  c: css`text-align: center;`,
  r: css`text-align: right;`,
}

export const flexRowAround = css`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
`

export const flexRowBetween = css`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`

export const pointer = css`
  &:hover {cursor: pointer;}
`
