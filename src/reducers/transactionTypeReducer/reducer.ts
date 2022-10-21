import { actionTypes } from './actions'

import { produce } from 'immer'

export interface transactionTypeState {
  selected: 'deposit' | 'withdrawn' | null
}

export function transactionTypeReducer(
  state: transactionTypeState,
  action: any,
) {
  switch (action.type) {
    case actionTypes.SELECT_TRANSACTION_TYPE: {
      return produce(state, (draft) => {
        draft.selected = action.payload
      })
    }

    case actionTypes.RESET_TRANSACTION_TYPE: {
      return produce(state, draft => {
        draft.selected = null
      })
    }
  }

  return state
}
