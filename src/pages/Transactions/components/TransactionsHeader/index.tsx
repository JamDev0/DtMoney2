import { HeaderContainer, NewTransactionBtnContainer } from './styles'

import Logo from '../../../../assets/Logo.svg'

import { TransactionsResume } from './components/TransactionsResume'

import * as Dialog from '@radix-ui/react-dialog'

import { NewTransactionModal } from './components/NewTransactionModal'

export function TransactionsHeader() {
  return (
    <HeaderContainer>
      <div>
        <img src={Logo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionBtnContainer>
              Nova transação
            </NewTransactionBtnContainer>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </div>

      <TransactionsResume />
    </HeaderContainer>
  )
}
