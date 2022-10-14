import {
  Td,
  TransactionDate,
  TransactionPrice,
  TransactionsTableContainer,
  TransactionTitle,
} from './styles'

export function TransactionsTable() {
  return (
    <TransactionsTableContainer>
      <tbody>
        <tr>
          <TransactionTitle>Desenvolvimento de site</TransactionTitle>
          <TransactionPrice type="deposit">R$ 12.000,00</TransactionPrice>
          <Td>Venda</Td>
          <TransactionDate>13/04/2022</TransactionDate>
        </tr>

        <tr>
          <TransactionTitle>Desenvolvimento de site</TransactionTitle>
          <TransactionPrice type="withdrawn">- R$ 12.000,00</TransactionPrice>
          <Td>Venda</Td>
          <TransactionDate>13/04/2022</TransactionDate>
        </tr>
      </tbody>
    </TransactionsTableContainer>
  )
}
