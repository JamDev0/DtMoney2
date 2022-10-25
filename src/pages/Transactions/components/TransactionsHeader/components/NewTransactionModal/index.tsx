import { memo } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import { Controller, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import * as z from 'zod'

import { transactionTypeContext } from '../../../../../../hooks/useTransactionType'

import { NewTransactionTypeRadioGroup } from './components/NewTransactionTypeRadioGroup'

import { api } from '../../../../../../libs/axios/axios'

import { useContextSelector } from 'use-context-selector'

import { transactionsAPIContext } from '../../../../../../hooks/useTransactionsAPI'

import { X } from 'phosphor-react'

import { LoadingAnimation } from '../../../../../../components/LoadingAnimation'

import {
  CloseModalBtn,
  DialogContentContainer,
  DialogOverlay,
  NewTransactionModalInput,
  NewTransactionModalInputsContainer,
  RegisterNewTransactionBtnContainer,
} from './styles'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['withdrawn', 'deposit']),
})

type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

interface newTransactionModalProps {
  setOpenState: (arg: boolean) => void
}

function NewTransactionModalComponent({
  setOpenState,
}: newTransactionModalProps) {
  const resetTransactionType = useContextSelector(
    transactionTypeContext,
    (context) => {
      return context.resetTransactionType
    },
  )

  const reloadAllTransactions = useContextSelector(
    transactionsAPIContext,
    (context) => {
      return context.reloadAllTransactions
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
    control,
  } = useForm<newTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  async function handleNewTransactionFormSubmit(
    data: newTransactionFormInputs,
  ) {
    await api.post('transactions', {
      ...data,
      createdAt: new Date().toISOString(),
    })

    reset()

    resetTransactionType()

    reloadAllTransactions()

    setOpenState(false)
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
              <NewTransactionModalInput
                type="text"
                placeholder="Descrição"
                required
                {...register('description')}
              />
              <NewTransactionModalInput
                type="number"
                placeholder="Preço"
                required
                {...register('price', { valueAsNumber: true })}
              />
              <NewTransactionModalInput
                type="text"
                placeholder="Categoria"
                required
                {...register('category')}
              />
            </NewTransactionModalInputsContainer>

            <Controller
              control={control}
              name="type"
              render={({ field }) => (
                <NewTransactionTypeRadioGroup
                  onValueChangeFunction={field.onChange}
                />
              )}
            />

            <RegisterNewTransactionBtnContainer disabled={isSubmitting}>
              {isSubmitting ? (
                <LoadingAnimation style={{ width: '1.5938rem' }} />
              ) : (
                'Cadastrar'
              )}
            </RegisterNewTransactionBtnContainer>
          </form>
        </DialogContentContainer>
      </Dialog.Content>
    </Dialog.Portal>
  )
}

export const NewTransactionModal = memo(NewTransactionModalComponent)
