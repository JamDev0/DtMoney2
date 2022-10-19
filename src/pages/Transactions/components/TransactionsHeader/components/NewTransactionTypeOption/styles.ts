import styled, { css } from 'styled-components'

export interface NewTransactionTypeOptionContainerParams {
  typeOfTransaction: 'deposit' | 'withdrawn'
  isSelected: boolean
}

const selectedBgColor = {
  deposit: css`
    background-color: ${(params) => params.theme['green-500']};
  `,
  withdrawn: css`
    background-color: ${(params) => params.theme['red-500']};
  `,
}

export const NewTransactionTypeOptionContainer = styled.button<NewTransactionTypeOptionContainerParams>`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.5rem;

  flex: 1;

  padding: 1rem 0px;

  border-radius: 6px;

  ${(params) =>
    params.isSelected
      ? selectedBgColor[params.typeOfTransaction]
      : css`
          background-color: ${(params) => params.theme['gray-700']};
        `}

  color: ${(params) =>
    params.isSelected ? params.theme.white : params.theme['gray-300']};

  cursor: pointer;

  transition: background-color 300ms ease-in-out;

  > svg {
    line-height: 0;

    font-size: 1.5rem;
    color: ${(params) =>
      params.isSelected
        ? params.theme.white
        : params.typeOfTransaction === 'deposit'
        ? params.theme['green-300']
        : params.theme['red-300']};
  }

  ${(params) =>
    !params.isSelected
      ? css`
          :hover {
            background-color: ${(params) => params.theme['gray-600']};
          }
        `
      : css``}
`
