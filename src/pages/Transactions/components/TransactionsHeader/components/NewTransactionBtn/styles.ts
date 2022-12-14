import styled from 'styled-components'

export const NewTransactionBtnContainer = styled.button`
  padding: 0.75rem 1.25rem;

  background-color: ${(params) => params.theme['green-500']};

  border-radius: 6px;

  color: ${(params) => params.theme.white};
  font-weight: bold;

  transition: background-color 300ms 0ms ease-in-out;

  cursor: pointer;

  :hover {
    background-color: ${(params) => params.theme['green-300']};
  }
`
