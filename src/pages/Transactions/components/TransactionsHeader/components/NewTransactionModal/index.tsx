import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { NewTransactionTypeOption } from '../NewTransactionTypeOption'

import {
  CloseModalBtn,
  DialogContentContainer,
  DialogOverlay,
  NewTransactionModalInput,
  NewTransactionModalInputsContainer,
  NewTransactionTypeOptionsContainer,
  RegisterNewTransactionBtnContainer,
} from './styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay asChild>
        <DialogOverlay />
      </Dialog.Overlay>

      <Dialog.Content asChild>
        <DialogContentContainer>
          <section>
            <Dialog.Close asChild>
              <CloseModalBtn>
                <X />
              </CloseModalBtn>
            </Dialog.Close>

            <Dialog.Title asChild>
              <h2>Nova transação</h2>
            </Dialog.Title>

            <NewTransactionModalInputsContainer>
              <NewTransactionModalInput placeholder="Descrição" />
              <NewTransactionModalInput placeholder="Preço" />
              <NewTransactionModalInput placeholder="Categoria" />
            </NewTransactionModalInputsContainer>

            <NewTransactionTypeOptionsContainer>
              <NewTransactionTypeOption
                text="Entrada"
                typeOfTransaction="deposit"
              />

              <NewTransactionTypeOption
                text="Saída"
                typeOfTransaction="withdrawn"
              />
            </NewTransactionTypeOptionsContainer>

            <RegisterNewTransactionBtnContainer>
              Cadastrar
            </RegisterNewTransactionBtnContainer>
          </section>
        </DialogContentContainer>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
