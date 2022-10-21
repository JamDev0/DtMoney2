import { createContext, ReactNode, useContext, useReducer } from 'react'
import { resetTransactionTypeAction, selectTransactionTypeAction } from '../reducers/transactionTypeReducer/actions'
import {
  transactionTypeReducer,
  transactionTypeState,
} from '../reducers/transactionTypeReducer/reducer'

interface transactionTypeContextInterface {
  selectTransactionType: (arg: transactionTypeState['selected']) => void
  selectedTransactionType: transactionTypeState['selected']
  resetTransactionType: () => void
}

const transactionTypeContext = createContext<transactionTypeContextInterface>(
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

  function selectTransactionType(
    transactionType: transactionTypeState['selected'],
  ) {
    dispatch(selectTransactionTypeAction(transactionType))
  }

  function resetTransactionType() {
    dispatch(resetTransactionTypeAction())
  }

  return (
    <transactionTypeContext.Provider
      value={{ selectTransactionType, selectedTransactionType, resetTransactionType }}
    >
      {children}
    </transactionTypeContext.Provider>
  )
}

export function useTransactionType() {
  const context = useContext(transactionTypeContext)

  return context
}
