import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

import { TransactionResumeCard } from './TransactionResumeCard'

import { TransactionsResumeContainer } from './styles'
import { useTransactionsAPI } from '../../../../../../hooks/useTransactionsAPI'

export function TransactionsResume() {
  const { transactions, isLoading } = useTransactionsAPI()

  const accumulator = { withdrawn: 0, deposit: 0, total: 0 }

  const resume =
    isLoading === false
      ? transactions.reduce((acc, transition) => {
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
