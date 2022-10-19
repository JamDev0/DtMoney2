import { TransactionsNavBar } from './components/TransactionsNavBar'
import { TransactionsTable } from './components/TransactionsTable'
import { TransactionsSearchForm } from './components/TrasactionsSearchForm'
import { TransactionsMainContainer } from './styles'

export function TransactionsMain() {
  return (
    <TransactionsMainContainer>
      <TransactionsSearchForm />

      <TransactionsTable />

      <TransactionsNavBar />
    </TransactionsMainContainer>
  )
}
