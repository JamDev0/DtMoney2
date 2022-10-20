import { ThemeProvider } from 'styled-components'
import { TransactionsAPIProvider } from './hooks/useTransactionsAPI'
import { TransactionTypeProvider } from './hooks/useTransactionType'
import { Transactions } from './pages/Transactions'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionTypeProvider>
        <TransactionsAPIProvider>
          <GlobalStyles />

          <Transactions />
        </TransactionsAPIProvider>
      </TransactionTypeProvider>
    </ThemeProvider>
  )
}
