import { TransactionResumeCard } from './TransactionResumeCard'

import { useContextSelector } from 'use-context-selector'

import { transactionsAPIContext } from '../../../../../../hooks/useTransactionsAPI'

import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

import { TransactionsResumeContainer } from './styles'

export function TransactionsResume() {
  const { allTransactionsList, isGettingAllTransactions } = useContextSelector(
    transactionsAPIContext,
    (context) => {
      return {
        allTransactionsList: context.allTransactionsList,
        isGettingAllTransactions: context.isGettingAllTransactions,
      }
    },
  )

  const accumulator = { withdrawn: 0, deposit: 0, total: 0 }

  const resume =
    isGettingAllTransactions === false
      ? allTransactionsList.reduce((acc, transition) => {
          if (transition.type === 'deposit') {
            acc.deposit += transition.price
            acc.total += transition.price
          } else {
            acc.withdrawn += transition.price
            acc.total -= transition.price
          }

          return acc
        }, accumulator)
      : accumulator

  const withdrawnTotal = resume.withdrawn

  const depositTotal = resume.deposit

  const total = resume.total

  return (
    <TransactionsResumeContainer>
      <TransactionResumeCard
        background="gray"
        icon={<ArrowCircleUp />}
        title="Entradas"
        iconColor="green"
        value={depositTotal}
      />

      <TransactionResumeCard
        background="gray"
        icon={<ArrowCircleDown />}
        title="Saídas"
        iconColor="red"
        value={withdrawnTotal}
      />

      <TransactionResumeCard
        background="green"
        icon={<CurrencyDollar />}
        title="Total"
        iconColor="white"
        value={total}
      />
    </TransactionsResumeContainer>
  )
}
