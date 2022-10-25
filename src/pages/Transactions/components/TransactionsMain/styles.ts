import styled from 'styled-components'

export const TransactionsMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-inline: 10rem;

  > div {
    width: 100%;

    max-width: ${(params) => params.theme['app-max-width']};
  }
`
