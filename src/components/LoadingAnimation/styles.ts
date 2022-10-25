import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

export const LoadingAnimationContainer = styled.div`
  width: 16px;
  aspect-ratio: 1/1;
  line-height: 0;

  > svg {
    line-height: 0;

    width: 100%;
    height: auto;

    animation-name: ${animation};
    animation-duration: 900ms;
    animation-timing-function: cubic-bezier(0.59, -0.245, 0.455, 1.32);
    animation-play-state: running;
    animation-iteration-count: infinite;
  }
`
