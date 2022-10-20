import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import {
  SearchBtn,
  SearchInput,
  TransactionsSearchFormContainer,
} from './styles'

import * as z from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string()
})

type searchFormInputs = z.infer<typeof searchFormSchema>

export function TransactionsSearchForm() {
  const { register, handleSubmit } = useForm<searchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  function handleTransactionsSearchFormContainer(data: searchFormInputs) {

  }

  return (
    <TransactionsSearchFormContainer>
      <SearchInput placeholder="Busque por transações" />
      <SearchBtn {...register('query')}>
        <MagnifyingGlass />

        <span>Buscar</span>
      </SearchBtn>
    </TransactionsSearchFormContainer>
  )
}
