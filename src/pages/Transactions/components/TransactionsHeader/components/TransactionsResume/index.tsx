import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

import { TransactionResumeCard } from './TransactionResumeCard'

import { TransactionsResumeContainer } from './styles'

export function TransactionsResume() {
  return (
    <TransactionsResumeContainer>
      <TransactionResumeCard
        background="gray"
        icon={<ArrowCircleUp />}
        title="Entradas"
        iconColor="green"
      />

      <TransactionResumeCard
        background="gray"
        icon={<ArrowCircleDown />}
        title="Saídas"
        iconColor="red"
      />

      <TransactionResumeCard
        background="green"
        icon={<CurrencyDollar />}
        title="Total"
        iconColor="white"
      />
    </TransactionsResumeContainer>
  )
}
