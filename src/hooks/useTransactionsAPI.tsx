import produce from 'immer'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface transaction {
  id: number
  description: string
  category: string
  type: 'withdrawn' | 'deposit'
  price: number
  createdAt: 'string'
}

interface transactionsAPIContextInterface {
  isLoading: boolean | 'uninitialized'
  transactions: transaction[]
}

const transactionsAPIContext = createContext<transactionsAPIContextInterface>(
  {} as transactionsAPIContextInterface,
)

interface transactionsAPIProviderProps {
  children: ReactNode
}

interface transactionsAPIState {
  isLoading: boolean | 'uninitialized'
  transactions: transaction[]
}

export function TransactionsAPIProvider({
  children,
}: transactionsAPIProviderProps) {
  const [state, setState] = useState<transactionsAPIState>({
    isLoading: 'uninitialized',
  } as transactionsAPIState)

  const isLoading = state.isLoading

  const transactions = state.transactions

  useEffect(() => {
    setState((innerState) =>
      produce(innerState, (draft) => {
        draft.isLoading = true
      }),
    )

    fetch('http://localhost:3333/transactions')
      .then((response) => response.json())
      .then((data) =>
        setState((innerState) =>
          produce(innerState, (draft) => {
            draft.transactions = data
            draft.isLoading = false
          }),
        ),
      )
  }, [])

  return (
    <transactionsAPIContext.Provider value={{ isLoading, transactions }}>
      {children}
    </transactionsAPIContext.Provider>
  )
}

export function useTransactionsAPI() {
  const context = useContext(transactionsAPIContext)

  return context
}
