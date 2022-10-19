import { MagnifyingGlass } from 'phosphor-react'
import {
  SearchBtn,
  SearchInput,
  TransactionsSearchFormContainer,
} from './styles'

export function TransactionsSearchForm() {
  return (
    <TransactionsSearchFormContainer>
      <SearchInput placeholder="Busque por transações" />
      <SearchBtn>
        <MagnifyingGlass />

        <span>Buscar</span>
      </SearchBtn>
    </TransactionsSearchFormContainer>
  )
}
