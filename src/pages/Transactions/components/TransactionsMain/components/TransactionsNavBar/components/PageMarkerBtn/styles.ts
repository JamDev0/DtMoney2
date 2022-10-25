import styled from 'styled-components'

interface PageMarkerBtnContainerParams {
  background: 'green' | 'gray'
  color: 'white' | 'gray'
}

export const PageMarkerBtnContainer = styled.button<PageMarkerBtnContainerParams>`
  padding: 0.25rem 0.75rem;

  border-radius: 6px;

  background-color: ${(params) =>
    params.background === 'green'
      ? params.theme['green-700']
      : params.theme['gray-600']};

  color: ${(params) =>
    params.color === 'white'
      ? params.theme['gray-100']
      : params.theme['gray-400']};

  cursor: pointer;
`
