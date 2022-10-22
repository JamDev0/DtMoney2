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
  query: z.string(),
})

type searchFormInputs = z.infer<typeof searchFormSchema>

export function TransactionsSearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<searchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleTransactionsSearchFormContainer(data: searchFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    reset()

    console.log(data)
  }

  return (
    <TransactionsSearchFormContainer
      onSubmit={handleSubmit(handleTransactionsSearchFormContainer)}
    >
      <SearchInput
        placeholder="Busque por transações"
        required
        {...register('query')}
      />
      <SearchBtn type="submit" disabled={isSubmitting}>
        <MagnifyingGlass />

        <span>Buscar</span>
      </SearchBtn>
    </TransactionsSearchFormContainer>
  )
}
