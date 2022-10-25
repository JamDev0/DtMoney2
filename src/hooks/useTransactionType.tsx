import { ReactNode, useCallback, useReducer } from 'react'

import { createContext } from 'use-context-selector'

import {
  resetTransactionTypeAction,
  selectTransactionTypeAction,
} from '../reducers/transactionTypeReducer/actions'

import {
  transactionTypeReducer,
  transactionTypeState,
} from '../reducers/transactionTypeReducer/reducer'

interface transactionTypeContextInterface {
  selectTransactionType: (arg: transactionTypeState['selected']) => void
  selectedTransactionType: transactionTypeState['selected']
  resetTransactionType: () => void
}

export const transactionTypeContext =
  createContext<transactionTypeContextInterface>(
    {} as transactionTypeContextInterface,
  )

const defaultTransactionTypeState: transactionTypeState = {
  selected: null,
}

interface TransactionTypeProviderProps {
  children: ReactNode
}

export function TransactionTypeProvider({
  children,
}: TransactionTypeProviderProps) {
  const [state, dispatch] = useReducer(
    transactionTypeReducer,
    defaultTransactionTypeState,
  )

  const selectedTransactionType = state.selected

  const selectTransactionType = useCallback(
    (transactionType: transactionTypeState['selected']) => {
      dispatch(selectTransactionTypeAction(transactionType))
    },
    [],
  )

  const resetTransactionType = useCallback(() => {
    dispatch(resetTransactionTypeAction())
  }, [])

  return (
    <transactionTypeContext.Provider
      value={{
        selectTransactionType,
        selectedTransactionType,
        resetTransactionType,
      }}
    >
      {children}
    </transactionTypeContext.Provider>
  )
}
