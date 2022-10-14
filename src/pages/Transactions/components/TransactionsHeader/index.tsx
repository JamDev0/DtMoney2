import { HeaderContainer } from './styles'

import Logo from '../../../../assets/Logo.svg'

import { NewTransactionBtn } from './components/NewTransactionBtn'

import { TransactionsResume } from './components/TransactionsResume'

export function TransactionsHeader() {
  return (
    <HeaderContainer>
      <div>
        <img src={Logo} alt="" />

        <NewTransactionBtn />
      </div>

      <TransactionsResume />
    </HeaderContainer>
  )
}
