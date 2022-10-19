import { transactionTypeState } from './reducer'

export enum actionTypes {
  SELECT_TRANSACTION_TYPE = 'SELECT_TRANSACTION_TYPE',
}

export function selectTransactionTypeAction(
  transactionType: transactionTypeState['selected'],
) {
  return {
    type: actionTypes.SELECT_TRANSACTION_TYPE,
    payload: transactionType,
  }
}
