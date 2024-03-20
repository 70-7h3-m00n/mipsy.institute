import { TypeLibPrograms, TypeLibReviews } from '@/types/index'

type TypePageReviewsPropsQuery = {
  readonly programs: TypeLibPrograms | null
  readonly reviews: TypeLibReviews | null
  readonly uniqueReviews: TypeLibReviews | null
}

export default TypePageReviewsPropsQuery
