import styled, {css} from 'styled-components'

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
  withdrawn: css`color: ${params => params.theme.}`
}

export const TransactionPrice = styled.td`
`

export const TransactionDate = styled.td`
  text-align: end;
`
