import { TransactionsHeader } from './components/TransactionsHeader'
import { TransactionsTable } from './components/TransactionsTable'
import { TransactionsContainer } from './styles'

export function Transactions() {
  return (
    <TransactionsContainer>
      <TransactionsHeader />

      <TransactionsTable />
    </TransactionsContainer>
  )
}
