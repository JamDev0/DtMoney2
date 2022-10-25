import { useForm } from 'react-hook-form'

import * as z from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

import { api } from '../../../../../../libs/axios/axios'

import { useContextSelector } from 'use-context-selector'

import { transactionsAPIContext } from '../../../../../../hooks/useTransactionsAPI'

import { LoadingAnimation } from '../../../../../../components/LoadingAnimation'

import { MagnifyingGlass } from 'phosphor-react'

import {
  SearchBtn,
  SearchInput,
  TransactionsSearchFormContainer,
} from './styles'

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

  const { setQueriedTransactions, setIsGettingQueriedTransactions } =
    useContextSelector(transactionsAPIContext, (context) => {
      return {
        setIsGettingQueriedTransactions:
          context.setIsGettingQueriedTransactions,
        setQueriedTransactions: context.setQueriedTransactions,
      }
    })

  async function handleTransactionsSearchFormContainer(data: searchFormInputs) {
    setIsGettingQueriedTransactions(true)

    const response = await api.get('transactions', {
      params: {
        q: data.query,
        _sort: 'createdAt',
        _order: 'desc',
      },
    })

    setQueriedTransactions(response.data)

    setIsGettingQueriedTransactions(false)

    reset()
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
        {isSubmitting ? (
          <LoadingAnimation
            style={{
              width: '1.5rem',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ) : (
          ''
        )}
      </SearchBtn>
    </TransactionsSearchFormContainer>
  )
}
