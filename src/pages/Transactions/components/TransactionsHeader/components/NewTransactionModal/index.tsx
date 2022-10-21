import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { useTransactionType } from '../../../../../../hooks/useTransactionType'
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

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  // type: z.enum(['withdrawn', 'deposit'])
})

type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const { resetTransactionType } = useTransactionType()

  const { register, handleSubmit, formState: {isSubmitting}, reset } = useForm<newTransactionFormInputs>({resolver: zodResolver(newTransactionFormSchema)})

  async function handleNewTransactionFormSubmit(data: newTransactionFormInputs) {
    await new Promise(resolve => setTimeout(resolve, 2000))

    reset()
    
    resetTransactionType()

    console.log(data)
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay asChild>
        <DialogOverlay />
      </Dialog.Overlay>

      <Dialog.Content asChild>
        <DialogContentContainer>
          <form onSubmit={handleSubmit(handleNewTransactionFormSubmit)}>
            <Dialog.Close asChild>
              <CloseModalBtn onClick={resetTransactionType}>
                <X />
              </CloseModalBtn>
            </Dialog.Close>

            <Dialog.Title asChild>
              <h2>Nova transação</h2>
            </Dialog.Title>

            <NewTransactionModalInputsContainer>
              <NewTransactionModalInput type='text' placeholder="Descrição" required {...register('description')}/>
              <NewTransactionModalInput type='number' placeholder="Preço" required {...register('price', {valueAsNumber: true})}/>
              <NewTransactionModalInput type='text' placeholder="Categoria" required {...register('category')} />
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

            <RegisterNewTransactionBtnContainer disabled={isSubmitting}>
              Cadastrar
            </RegisterNewTransactionBtnContainer>
          </form>
        </DialogContentContainer>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
