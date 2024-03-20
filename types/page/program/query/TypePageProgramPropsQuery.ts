import { TypeLibPrograms, TypeLibReviews } from '@/types/index'

type TypePageProgramPropsQuery = {
  readonly reviews: TypeLibReviews | null
  readonly programs: TypeLibPrograms | null
  readonly program: TypeLibPrograms | null
}

export default TypePageProgramPropsQuery
