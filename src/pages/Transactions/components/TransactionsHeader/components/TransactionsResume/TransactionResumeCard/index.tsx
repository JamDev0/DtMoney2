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
  value: number
}

export function TransactionResumeCard({
  background,
  icon,
  title,
  iconColor,
  value,
}: TransactionResumeCardProps) {
  const formattedPrice = Intl.NumberFormat('pt-br', {
    minimumFractionDigits: 2,
  }).format(value)

  return (
    <TransactionResumeCardContainer background={background}>
      <Header iconColor={iconColor}>
        <h2>{title}</h2>

        {icon}
      </Header>
      <Body>
        <h2>R$ {formattedPrice}</h2>
      </Body>
    </TransactionResumeCardContainer>
  )
}
