import { CaretLeft, CaretRight } from 'phosphor-react'
import { ArrowBtnContainer, ArrowBtnContainerParams } from './styles'

interface ArrowBtnProps extends ArrowBtnContainerParams {
  direction: 'left' | 'right'
}

export function ArrowBtn({ color, direction }: ArrowBtnProps) {
  return (
    <ArrowBtnContainer color={color}>
      {direction === 'left' ? (
        <CaretLeft weight="bold" />
      ) : (
        <CaretRight weight="bold" />
      )}
    </ArrowBtnContainer>
  )
}
