import { TypeLibReviews } from '@/types/index'

type TSortReviewsCreatedAtASCProps = {
  reviews: TypeLibReviews
}

const sortReviewsCreatedAtASC = ({
  reviews
}: TSortReviewsCreatedAtASCProps) => {
  return [...reviews].sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime()
    const dateB = new Date(b.createdAt).getTime()
    return dateB - dateA
  })
}

export default sortReviewsCreatedAtASC
