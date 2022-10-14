import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding-top: 2.5rem;
  padding-inline: 10rem;

  margin-bottom: 7.5rem;

  background-color: ${(params) => params.theme['gray-900']};

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
      width: 10.75rem;
    }
  }
`
