import { ReactNode, useCallback, useEffect, useReducer } from 'react'

import { createContext } from 'use-context-selector'

import { api } from '../libs/axios/axios'

import {
  resetQueriedTransactionsAction,
  setAllTransactionsAction,
  setIsGettingAllTransactionsAction,
  setIsGettingQueriedTransactionAction,
  setQueriedTransactionsAction,
  setReloadAllTransactionsAction,
} from '../reducers/TransactionsAPIReducer/actions'

import {
  transactionAPIReducer,
  transactionAPIState,
} from '../reducers/TransactionsAPIReducer/reducer'

interface transactionsAPIContextInterface {
  allTransactionsList: transactionAPIState['allTransactions']['transactions']
  isGettingAllTransactions: transactionAPIState['allTransactions']['isGetting']

  queriedTransactionsList: transactionAPIState['queriedTransactions']['transactions']
  isGettingQueriedTransactions: transactionAPIState['allTransactions']['isGetting']
  setQueriedTransactions: (
    transactions: transactionAPIState['queriedTransactions']['transactions'],
  ) => void
  setIsGettingQueriedTransactions: (
    isGettingTransactions: transactionAPIState['queriedTransactions']['isGetting'],
  ) => void
  reloadAllTransactions: () => void
}

export const transactionsAPIContext =
  createContext<transactionsAPIContextInterface>(
    {} as transactionsAPIContextInterface,
  )

interface transactionsAPIProviderProps {
  children: ReactNode
}

const initialTransactionAPIState: transactionAPIState = {
  allTransactions: {
    isGetting: 'uninitialized',
    transactions: [],
    reload: false,
  },
  queriedTransactions: { isGetting: 'uninitialized', transactions: [] },
}

export function TransactionsAPIProvider({
  children,
}: transactionsAPIProviderProps) {
  const [{ allTransactions, queriedTransactions }, dispatch] = useReducer(
    transactionAPIReducer,
    initialTransactionAPIState,
  )

  const allTransactionsList = allTransactions.transactions

  const isGettingAllTransactions = allTransactions.isGetting

  const shouldReloadAllTransactions = allTransactions.reload

  const isGettingQueriedTransactions = queriedTransactions.isGetting

  const queriedTransactionsList = queriedTransactions.transactions

  useEffect(() => {
    if (
      isGettingAllTransactions === 'uninitialized' ||
      !!shouldReloadAllTransactions
    ) {
      dispatch(setIsGettingAllTransactionsAction(true))

      api
        .get('transactions', {
          params: {
            _sort: 'createdAt',
            _order: 'desc',
          },
        })
        .then((response) => {
          dispatch(setAllTransactionsAction(response.data))

          dispatch(setIsGettingAllTransactionsAction(false))

          dispatch(setReloadAllTransactionsAction(false))
        })
    }
  }, [isGettingAllTransactions, shouldReloadAllTransactions])

  const reloadAllTransactions = useCallback(() => {
    dispatch(setReloadAllTransactionsAction(true))

    dispatch(resetQueriedTransactionsAction())
  }, [])

  const setIsGettingQueriedTransactions = useCallback(
    (
      isGettingTransactions: transactionAPIState['allTransactions']['isGetting'],
    ) => {
      dispatch(setIsGettingQueriedTransactionAction(isGettingTransactions))
    },
    [],
  )

  const setQueriedTransactions = useCallback(
    (
      transactions: transactionAPIState['queriedTransactions']['transactions'],
    ) => {
      dispatch(setQueriedTransactionsAction(transactions))
    },
    [],
  )

  return (
    <transactionsAPIContext.Provider
      value={{
        allTransactionsList,
        isGettingAllTransactions,
        isGettingQueriedTransactions,
        queriedTransactionsList,
        setIsGettingQueriedTransactions,
        setQueriedTransactions,
        reloadAllTransactions,
      }}
    >
      {children}
    </transactionsAPIContext.Provider>
  )
}
