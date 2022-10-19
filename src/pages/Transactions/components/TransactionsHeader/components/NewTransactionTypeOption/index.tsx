import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'
import { useTransactionType } from '../../../../../../hooks/useTransactionType'
import {
  NewTransactionTypeOptionContainer,
  NewTransactionTypeOptionContainerParams,
} from './styles'

interface NewTransactionTypeOptionProps
  extends Omit<NewTransactionTypeOptionContainerParams, 'isSelected'> {
  text: string
}

export function NewTransactionTypeOption({
  text,
  typeOfTransaction,
}: NewTransactionTypeOptionProps) {
  const { selectTransactionType, selectedTransactionType } =
    useTransactionType()

  const isCurrentTypeSelected = selectedTransactionType === typeOfTransaction

  return (
    <NewTransactionTypeOptionContainer
      typeOfTransaction={typeOfTransaction}
      onClick={() => selectTransactionType(typeOfTransaction)}
      isSelected={isCurrentTypeSelected}
    >
      {typeOfTransaction === 'deposit' ? (
        <ArrowCircleUp />
      ) : (
        <ArrowCircleDown />
      )}

      <span>{text}</span>
    </NewTransactionTypeOptionContainer>
  )
}
