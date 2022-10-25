import { CaretLeft, CaretRight } from 'phosphor-react'

import { ArrowBtnContainer } from './styles'

interface ArrowBtnProps {
  direction: 'left' | 'right'
  color: 'green' | 'gray'
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
