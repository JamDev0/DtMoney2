import { ReactNode } from 'react'

import {
  Body,
  Header,
  TransactionResumeCardContainer,
  TransactionResumeCardContainerParams,
  TransactionResumeCardHeaderParams,
} from './styles'

interface TransactionResumeCardProps
  extends TransactionResumeCardContainerParams,
    TransactionResumeCardHeaderParams {
  title: string
  icon: ReactNode
}

export function TransactionResumeCard({
  background,
  icon,
  title,
  iconColor,
}: TransactionResumeCardProps) {
  return (
    <TransactionResumeCardContainer background={background}>
      <Header iconColor={iconColor}>
        <h2>{title}</h2>

        {icon}
      </Header>
      <Body>
        <h2>R$ 17.000,00</h2>
      </Body>
    </TransactionResumeCardContainer>
  )
}
