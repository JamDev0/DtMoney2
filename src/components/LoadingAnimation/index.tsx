import { CircleNotch } from 'phosphor-react'
import { HTMLAttributes } from 'react'
import { LoadingAnimationContainer } from './styles'

interface LoadingAnimationProps extends HTMLAttributes<HTMLElement> {}

export function LoadingAnimation(props: LoadingAnimationProps) {
  return (
    <LoadingAnimationContainer {...props}>
      <CircleNotch />
    </LoadingAnimationContainer>
  )
}
