import { produce } from 'immer'

import { actionTypes } from './actions'

interface transactionInterface {
  id: number
  description: string
  category: string
  type: 'withdrawn' | 'deposit'
  price: number
  createdAt: 'string'
}

type isGettingTransactions = boolean | 'uninitialized'

interface queryTransactionsInterface {
  transactions: transactionInterface[]
  isGetting: isGettingTransactions
}

interface allTransactionsInterface {
  transactions: transactionInterface[]
  isGetting: isGettingTransactions
  reload: boolean
}

export interface transactionAPIState {
  queriedTransactions: queryTransactionsInterface
  allTransactions: allTransactionsInterface
}

export function transactionAPIReducer(state: transactionAPIState, action: any) {
  switch (action.type) {
    case actionTypes.SET_ALL_TRANSACTIONS: {
      return produce(state, (draft) => {
        draft.allTransactions.transactions = action.payload
      })
    }

    case actionTypes.SET_IS_GETTING_ALL_TRANSACTIONS: {
      return produce(state, (draft) => {
        draft.allTransactions.isGetting = action.payload
      })
    }

    case actionTypes.SET_RELOAD_ALL_TRANSACTIONS: {
      return produce(state, (draft) => {
        draft.allTransactions.reload = action.payload
      })
    }

    case actionTypes.SET_QUERIED_TRANSACTIONS: {
      return produce(state, (draft) => {
        draft.queriedTransactions.transactions = action.payload
      })
    }

    case actionTypes.SET_IS_GETTING_QUERIED_TRANSACTIONS: {
      return produce(state, (draft) => {
        draft.queriedTransactions.isGetting = action.payload
      })
    }

    case actionTypes.RESET_QUERIED_TRANSACTIONS: {
      return produce(state, (draft) => {
        draft.queriedTransactions = {
          isGetting: 'uninitialized',
          transactions: [],
        }
      })
    }
  }

  return state
}
