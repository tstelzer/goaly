import styled from 'react-emotion'

enum colors {
  lightgray = '#ccc',
  darkgray = '#1c1c1c',
}

export const BorderSection = styled('section')`
  position: relative;
  font-size: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  background-color: white;
  border: 2px solid ${colors.darkgray};

  & h2 {
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

export const StripedListItem = styled('li')`
  &:not(:first-of-type) {
    border-top: 1px solid ${colors.lightgray};
  }
  &:nth-of-type(even) {
    background-color: #f7feff;
  }
`

StripedListItem.displayName = 'StripedListItem'

export const Button = styled('button') `
  padding: 0.25rem 0.5rem;
  &:hover {
    color: white;
    background-color: ${colors.darkgray};
  }
`

export const SmallButton = styled('button')`
  padding: 0.25rem 0.5rem;
  &:hover {
    color: white;
    background-color: ${colors.darkgray};
  }
`

SmallButton.displayName = 'SmallButton'

export const Paragraph = styled('p') `
  padding: 0.25rem 0.5rem;
`

Paragraph.displayName = 'Paragraph'

export const WideButton = styled('button')`
  width: 100%;
  padding: 0.25rem 0.5rem;
  border-top: 1px solid ${colors.lightgray};
  &:hover {
    color: white;
    background-color: #1c1c1c;
    border-top: 1px solid ${colors.darkgray};
  }
`

WideButton.displayName = 'WideButton'
