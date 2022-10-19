import { PageMarkerBtnContainer, PageMarkerBtnContainerParams } from './styles'

interface PageMarkerBtnProps extends PageMarkerBtnContainerParams {
  number: number
}

export function PageMarkerBtn({
  background,
  color,
  number,
}: PageMarkerBtnProps) {
  return (
    <PageMarkerBtnContainer background={background} color={color}>
      {number}
    </PageMarkerBtnContainer>
  )
}
