import * as RadioGroup from '@radix-ui/react-radio-group'

import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'

import {
  NewTransactionTypeOptionContainer,
  NewTransactionTypeRadioGroupContainer,
} from './styles'

interface NewTransactionTypeRadioGroupProps {
  onValueChangeFunction: (data: string) => void
}

export function NewTransactionTypeRadioGroup({
  onValueChangeFunction,
}: NewTransactionTypeRadioGroupProps) {
  return (
    <RadioGroup.Root
      required
      asChild
      onValueChange={(data) => {
        onValueChangeFunction(data)
      }}
    >
      <NewTransactionTypeRadioGroupContainer>
        <RadioGroup.Item asChild value="withdrawn">
          <NewTransactionTypeOptionContainer
            typeOfTransaction="withdrawn"
            isSelected={false}
          >
            <ArrowCircleDown />

            <span>Saída</span>
          </NewTransactionTypeOptionContainer>
        </RadioGroup.Item>
        <RadioGroup.Item asChild value="deposit">
          <NewTransactionTypeOptionContainer
            typeOfTransaction="deposit"
            isSelected={false}
          >
            <ArrowCircleUp />

            <span>Entrada</span>
          </NewTransactionTypeOptionContainer>
        </RadioGroup.Item>
      </NewTransactionTypeRadioGroupContainer>
    </RadioGroup.Root>
  )
}
