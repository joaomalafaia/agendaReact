import styled from 'styled-components'

export const ContatoArea = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 16px;

  li {
    list-style: none;
  }
`
