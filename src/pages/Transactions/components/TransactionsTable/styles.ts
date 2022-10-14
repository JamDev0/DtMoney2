import styled, { css } from 'styled-components'

export const TransactionsTableContainer = styled.table`
  width: 100%;

  padding-inline: 10rem;
`

export const TransactionTitle = styled.td`
  width: 45%;
`

interface TransactionPriceParams {
  type: 'withdrawn' | 'deposit'
}

const TransactionPriceColor = {
  withdrawn: css`
    color: ${(params) => params.theme['red-300']};
  `,
  deposit: css`
    color: ${(params) => params.theme['green-500']};
  `,
}

export const TransactionPrice = styled.td<TransactionPriceParams>`
  ${(params) => TransactionPriceColor[params.type]}
`

export const TransactionDate = styled.td`
  text-align: end;
`
