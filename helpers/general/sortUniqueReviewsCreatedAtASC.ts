import { TypeLibReviews } from '@/types/index'

type TSortReviewsCreatedAtASCProps = {
  uniqueReviews: TypeLibReviews
}

const sortUniqueReviewsCreatedAtASC = ({
  uniqueReviews
}: TSortReviewsCreatedAtASCProps) => {
  return [...uniqueReviews].sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime()
    const dateB = new Date(b.createdAt).getTime()
    return dateB - dateA
  })
}

export default sortUniqueReviewsCreatedAtASC