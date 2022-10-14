import {
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
          <td>Venda</td>
          <TransactionDate>13/04/2022</TransactionDate>
        </tr>
      </tbody>
    </TransactionsTableContainer>
  )
}
