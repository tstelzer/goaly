import {css, cx} from 'react-emotion'

export const centered = css`text-align: center;`

export const sunken = css`
  background-color: #f1f1f1;
  border-top: 1px solid #ddd;
`

export const smallContainer = css`
  ${centered};
  width: 30rem;
  margin-left: auto;
  margin-right: auto;
`

export const wideContainer = css`
  width: 60rem;
  margin-left: auto;
  margin-right: auto;
`

export const grid = css`
  display: grid;
  grid-template-columns: 50% 50%;
`

export const columnRight = css`
  grid-column: 2 / 3;
`

export const columnSpanTwo = css`
  grid-column: 1 / span 2;
`

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
