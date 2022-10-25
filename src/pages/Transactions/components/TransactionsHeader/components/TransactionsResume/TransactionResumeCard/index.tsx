import { ReactNode } from 'react'

import { Body, Header, TransactionResumeCardContainer } from './styles'

interface TransactionResumeCardProps {
  title: string
  icon: ReactNode
  value: number
  background: 'green' | 'gray' | 'red'
  iconColor: 'green' | 'red' | 'white'
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
