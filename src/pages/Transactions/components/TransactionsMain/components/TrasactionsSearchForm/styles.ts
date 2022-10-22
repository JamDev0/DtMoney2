import styled, { keyframes } from 'styled-components'

export const TransactionsSearchFormContainer = styled.form`
  width: 100%;

  display: flex;
  column-gap: 1rem;

  margin-bottom: 1.5rem;
`

export const SearchInput = styled.input`
  flex: 1;

  padding: 1rem;

  background-color: ${(params) => params.theme['gray-900']};

  border: 0;
  border-radius: 6px;

  color: ${(params) => params.theme['gray-300']};

  ::placeholder {
    color: ${(params) => params.theme['gray-500']};
  }
`

const SearchBtnLoadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

export const SearchBtn = styled.button`
  width: fit-content;

  display: flex;
  align-items: center;
  column-gap: 0.75rem;

  border: 1px solid ${(params) => params.theme['green-300']};
  border-radius: 6px;

  padding: 0.875rem 2rem;

  color: ${(params) => params.theme['green-300']};

  background-color: transparent;

  cursor: pointer;

  transition: color 300ms 0ms ease-in-out,
    background-color 300ms 0ms ease-in-out;

  > svg {
    font-size: 1.25rem;

    line-height: 0;

    transform: rotate(360deg);
  }

  > span {
    font-weight: bold;
  }

  :not(:disabled):hover {
    color: ${(params) => params.theme.white};
    background-color: ${(params) => params.theme['green-300']};
  }

  :disabled {
    opacity: 0.75;

    cursor: not-allowed;

    > svg {
      animation-name: ${SearchBtnLoadingAnimation};
      animation-duration: 900ms;
      animation-timing-function: cubic-bezier(0.59, -0.245, 0.455, 1.32);
      animation-play-state: running;
      animation-iteration-count: infinite;
    }
  }
`
