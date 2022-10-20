import { useTransactionsAPI } from '../../../../../../hooks/useTransactionsAPI'
import { TransactionsTableContainer } from './styles'
import { TransactionTableRow } from './TransactionsTableRow'

export function TransactionsTable() {
  const { isLoading, transactions } = useTransactionsAPI()

  return (
    <TransactionsTableContainer>
      <tbody>
        {isLoading === false ? (
          transactions.map(
            ({ category, createdAt, description, id, price, type }) => (
              <TransactionTableRow
                category={category}
                createdAt={createdAt}
                description={description}
                price={price}
                type={type}
                key={id}
              />
            ),
          )
        ) : (
          <span>carregando</span>
        )}
      </tbody>
    </TransactionsTableContainer>
  )
}
