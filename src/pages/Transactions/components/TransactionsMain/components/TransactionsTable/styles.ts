import styled, { css } from 'styled-components'

export const TransactionsTableContainer = styled.table`
  width: 100%;

  padding-inline: 10rem;

  tbody {
    width: 100%;

    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
  }

  tr {
    display: flex;

    width: 100%;

    padding: 1.25rem 2rem;

    background-color: ${(params) => params.theme['gray-700']};

    border-radius: 5px;
  }
`

export const Td = styled.td`
  flex: 1;
`

export const TransactionTitle = styled(Td)`
  flex: none;

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
    color: ${(params) => params.theme['green-300']};
  `,
}

export const TransactionPrice = styled(Td)<TransactionPriceParams>`
  ${(params) => TransactionPriceColor[params.type]}
`

export const TransactionDate = styled(Td)`
  flex: none;

  text-align: end;
`
