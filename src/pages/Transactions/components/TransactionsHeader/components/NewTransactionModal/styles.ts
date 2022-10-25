import styled from 'styled-components'

export const CloseModalBtn = styled.button`
  position: absolute;

  top: 1.5rem;
  right: 1.5rem;

  border-radius: 6px;

  background-color: transparent;

  color: ${(params) => params.theme['gray-500']};
  line-height: 0;

  cursor: pointer;

  > svg {
    font-size: 1.5rem;
  }
`

export const DialogContentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  > form {
    position: relative;

    width: 33.5rem;

    padding: 3rem;

    background-color: ${(params) => params.theme['gray-800']};

    border-radius: 6px;

    box-shadow: 0px 4px 32px rgb(0, 0, 0, 0.8);

    > h2 {
      margin-bottom: 2rem;

      color: ${(params) => params.theme['gray-100']};
      font-weight: bold;
      font-size: 1.5rem;
    }
  }
`

export const DialogOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  background-color: black;
  opacity: 0.75;
`

export const NewTransactionModalInputsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;

  margin-bottom: 1.5rem;
`

export const NewTransactionModalInput = styled.input`
  padding: 1rem;

  width: 100%;

  border-radius: 6px;
  border: 1px solid transparent;

  color: ${(params) => params.theme['gray-100']};
  font-size: 1rem;

  background-color: ${(params) => params.theme['gray-900']};

  &[type='number'] {
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    -moz-appearance: textfield;
  }

  ::placeholder {
    color: ${(params) => params.theme['gray-500']};
  }

  :focus {
    border: 1px solid ${(params) => params.theme['green-300']};

    box-shadow: none;
  }
`

export const RegisterNewTransactionBtnContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 1rem 2rem;

  background-color: ${(params) => params.theme['green-500']};

  border: 0;
  border-radius: 6px;

  color: ${(params) => params.theme.white};
  font-weight: bold;

  transition: background-color 300ms ease-in-out;

  cursor: pointer;

  :not(:disabled):hover {
    background-color: ${(params) => params.theme['green-300']};
  }

  :disabled {
    opacity: 0.75;
  }
`
