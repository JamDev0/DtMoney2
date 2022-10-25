import styled from 'styled-components'

interface ArrowBtnContainerParams {
  color: 'green' | 'gray'
}

export const ArrowBtnContainer = styled.button<ArrowBtnContainerParams>`
  height: fit-content;

  line-height: 0;

  border-radius: 6px;

  background-color: transparent;

  color: ${(params) =>
    params.color === 'green'
      ? params.theme['green-500']
      : params.theme['gray-600']};

  cursor: pointer;

  > svg {
    font-size: 1.5rem;
  }
`
