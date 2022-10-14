import styled, { css } from 'styled-components'

export interface TransactionResumeCardContainerParams {
  background: 'green' | 'gray' | 'red'
}

const backgroundColor = {
  gray: css`
    background-color: ${(params) => params.theme['gray-600']};
  `,
  green: css`
    background-color: ${(params) => params.theme['green-700']};
  `,
  red: css`
    background-color: ${(params) => params.theme['red-700']};
  `,
}

export interface TransactionResumeCardHeaderParams {
  iconColor: 'green' | 'red' | 'white'
}

const iconColor = {
  green: css`
    color: ${(params) => params.theme['green-300']};
  `,
  red: css`
    color: ${(params) => params.theme['red-300']};
  `,
  white: css`
    color: ${(params) => params.theme.white};
  `,
}

export const TransactionResumeCardContainer = styled.div<TransactionResumeCardContainerParams>`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;

  flex: 1;

  ${(params) => backgroundColor[params.background]}

  padding: 1.5rem 1.5rem 1.5rem 2rem;

  border-radius: 6px;

  transform: translateY(50%);
`

export const Header = styled.div<TransactionResumeCardHeaderParams>`
  width: 100%;

  display: flex;
  justify-content: space-between;
  column-gap: 2rem;

  color: ${(params) => params.theme['gray-300']};

  > svg {
    ${(params) => iconColor[params.iconColor]}
    line-height: 0;
    font-size: 2rem;
  }
`

export const Body = styled.div`
  > h2 {
    font-weight: bold;
    font-size: 2rem;
    color: ${(params) => params.theme['gray-100']};
  }
`
