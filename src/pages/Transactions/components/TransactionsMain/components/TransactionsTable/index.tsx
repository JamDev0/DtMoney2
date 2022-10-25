import { memo } from 'react'

import { useContextSelector } from 'use-context-selector'

import { transactionsAPIContext } from '../../../../../../hooks/useTransactionsAPI'

import { TransactionTableRow } from './TransactionsTableRow'

import { TransactionsTableContainer } from './styles'

function TransactionsTableComponente() {
  const {
    allTransactionsList,
    isGettingAllTransactions,
    isGettingQueriedTransactions,
    queriedTransactionsList,
  } = useContextSelector(transactionsAPIContext, (context) => {
    return {
      allTransactionsList: context.allTransactionsList,
      isGettingAllTransactions: context.isGettingAllTransactions,
      isGettingQueriedTransactions: context.isGettingQueriedTransactions,
      queriedTransactionsList: context.queriedTransactionsList,
    }
  })

  return (
    <TransactionsTableContainer>
      <tbody>
        {!isGettingAllTransactions &&
        isGettingQueriedTransactions === 'uninitialized' ? (
          allTransactionsList.map(
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
        ) : !isGettingQueriedTransactions ? (
          queriedTransactionsList.map(
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

export const TransactionsTable = memo(TransactionsTableComponente)
