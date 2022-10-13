import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  padding-top: 2.5rem;
  padding-inline: 10rem;

  background-color: ${params => params.theme["gray-900"]};
  
  > img {
    width: 10.75rem;
  }
`