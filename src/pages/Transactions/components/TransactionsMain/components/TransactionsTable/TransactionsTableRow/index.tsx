import { DateTime } from 'luxon'

import {
  Td,
  TransactionDate,
  TransactionPrice,
  TransactionsTableRowContainer,
  TransactionTitle,
} from './styles'

interface TransactionTableRowProps {
  description: string
  price: number
  category: string
  createdAt: string
  type: 'withdrawn' | 'deposit'
}

export function TransactionTableRow({
  category,
  createdAt,
  description,
  price,
  type,
}: TransactionTableRowProps) {
  const formattedPrice = Intl.NumberFormat('pt-br', {
    minimumFractionDigits: 2,
  }).format(price)

  const priceToDisplay =
    type === 'withdrawn' ? `- R$ ${formattedPrice}` : `R$ ${formattedPrice}`

  return (
    <TransactionsTableRowContainer>
      <TransactionTitle>{description}</TransactionTitle>
      <TransactionPrice type={type}>{priceToDisplay}</TransactionPrice>
      <Td>{category}</Td>
      <TransactionDate>
        {DateTime.fromISO(createdAt).toLocaleString()}
      </TransactionDate>
    </TransactionsTableRowContainer>
  )
}
