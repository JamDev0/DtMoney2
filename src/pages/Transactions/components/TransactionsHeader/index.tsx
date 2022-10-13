import { HeaderContainer } from './styles'

import Logo from '../../../../assets/Logo.svg'
import { NewTransactionBtn } from './NewTransactionBtn'

export function TransactionsHeader() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />

      <NewTransactionBtn />
    </HeaderContainer>
  )
}
