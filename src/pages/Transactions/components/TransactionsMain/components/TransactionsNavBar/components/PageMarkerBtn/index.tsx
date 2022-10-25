import { PageMarkerBtnContainer } from './styles'

interface PageMarkerBtnProps {
  number: number
  background: 'green' | 'gray'
  color: 'white' | 'gray'
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
