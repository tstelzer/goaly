import styled from 'react-emotion'

const ffUi = `
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
`

const ffMono = `
  font-family: monospace;
`

export const Container = styled('main')`
  ${ffMono}
  color: black;
  font-size: 1em;
`
