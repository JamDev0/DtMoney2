import { ArrowBtn } from './components/ArrowBtn'

import { PageMarkerBtn } from './components/PageMarkerBtn'

import { PageMarkersContainer, TransactionsNavBarContainer } from './styles'

export function TransactionsNavBar() {
  return (
    <TransactionsNavBarContainer>
      <ArrowBtn color="gray" direction="left" />
      <PageMarkersContainer>
        <PageMarkerBtn background="green" color="white" number={1} />
      </PageMarkersContainer>
      <ArrowBtn color="gray" direction="right" />
    </TransactionsNavBarContainer>
  )
}
