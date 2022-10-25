import { useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import { TransactionsResume } from './components/TransactionsResume'

import { NewTransactionModal } from './components/NewTransactionModal'

import { HeaderContainer, NewTransactionBtnContainer } from './styles'

import Logo from '../../../../assets/Logo.svg'

export function TransactionsHeader() {
  const [open, setOpen] = useState(false)

  return (
    <HeaderContainer>
      <div>
        <img src={Logo} alt="" />

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <NewTransactionBtnContainer>
              Nova transação
            </NewTransactionBtnContainer>
          </Dialog.Trigger>
          <NewTransactionModal setOpenState={setOpen} />
        </Dialog.Root>
      </div>

      <TransactionsResume />
    </HeaderContainer>
  )
}
