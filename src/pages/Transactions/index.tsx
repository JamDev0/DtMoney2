import { TransactionsHeader } from './components/TransactionsHeader'
import { TransactionsMain } from './components/TransactionsMain'
import { TransactionsContainer } from './styles'

export function Transactions() {
  return (
    <TransactionsContainer>
      <TransactionsHeader />

      <TransactionsMain />
    </TransactionsContainer>
  )
}
