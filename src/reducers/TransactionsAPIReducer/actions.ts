import { transactionAPIState } from './reducer'

export enum actionTypes {
  SET_ALL_TRANSACTIONS = 'SET_ALL_TRANSACTIONS',
  SET_IS_GETTING_ALL_TRANSACTIONS = 'SET_IS_GETTING_ALL_TRANSACTIONS',
  SET_RELOAD_ALL_TRANSACTIONS = 'SET_RELOAD_ALL_TRANSACTIONS',
  SET_QUERIED_TRANSACTIONS = 'SET_QUERIED_TRANSACTIONS',
  SET_IS_GETTING_QUERIED_TRANSACTIONS = 'SET_IS_GETTING_QUERIED_TRANSACTIONS',
  RESET_QUERIED_TRANSACTIONS = 'RESET_QUERIED_TRANSACTIONS',
}

export function setAllTransactionsAction(
  payload: transactionAPIState['allTransactions']['transactions'],
) {
  return {
    type: actionTypes.SET_ALL_TRANSACTIONS,
    payload,
  }
}

export function setIsGettingAllTransactionsAction(
  payload: transactionAPIState['allTransactions']['isGetting'],
) {
  return {
    type: actionTypes.SET_IS_GETTING_ALL_TRANSACTIONS,
    payload,
  }
}

export function setReloadAllTransactionsAction(
  payload: transactionAPIState['allTransactions']['reload'],
) {
  return {
    type: actionTypes.SET_RELOAD_ALL_TRANSACTIONS,
    payload,
  }
}

export function setQueriedTransactionsAction(
  payload: transactionAPIState['queriedTransactions']['transactions'],
) {
  return {
    type: actionTypes.SET_QUERIED_TRANSACTIONS,
    payload,
  }
}

export function setIsGettingQueriedTransactionAction(
  payload: transactionAPIState['queriedTransactions']['isGetting'],
) {
  return {
    type: actionTypes.SET_IS_GETTING_QUERIED_TRANSACTIONS,
    payload,
  }
}

export function resetQueriedTransactionsAction() {
  return {
    type: actionTypes.RESET_QUERIED_TRANSACTIONS,
  }
}
