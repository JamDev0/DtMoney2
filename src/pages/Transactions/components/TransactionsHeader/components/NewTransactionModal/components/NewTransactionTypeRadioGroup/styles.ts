import styled, { css } from 'styled-components'

export const NewTransactionTypeRadioGroupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 1rem;

  width: 100%;

  margin-bottom: 2.5rem;
`
interface NewTransactionTypeOptionContainerParams {
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

  background-color: ${(params) => params.theme['gray-700']};

  color: ${(params) =>
    params.isSelected ? params.theme.white : params.theme['gray-300']};

  cursor: pointer;

  transition: background-color 300ms ease-in-out;

  > svg {
    line-height: 0;

    font-size: 1.5rem;

    color: ${(params) =>
      params.typeOfTransaction === 'deposit'
        ? params.theme['green-300']
        : params.theme['red-300']};
  }

  &[aria-checked='true'] {
    ${(params) => selectedBgColor[params.typeOfTransaction]}

    color: ${(params) => params.theme.white};

    > svg {
      color: ${(params) => params.theme.white};
    }
  }

  :not([aria-checked='true']):hover {
    background-color: ${(params) => params.theme['gray-600']};
  }
`
