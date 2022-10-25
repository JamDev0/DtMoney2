import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 2.5rem;
  padding-inline: 10rem;

  margin-bottom: 7.5rem;

  background-color: ${(params) => params.theme['gray-900']};

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: ${(params) => params.theme['app-max-width']};

    > img {
      width: 10.75rem;
    }
  }
`

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
