import { TypeLibPrograms, TypeLibProgram, TypeLibReviews } from '@/types/index'

type TypePageProgramProps = {
  readonly reviews: TypeLibReviews | null
  readonly programs: TypeLibPrograms | null
  readonly program: TypeLibProgram | null
  readonly studyFieldSlug: string | null
}

export default TypePageProgramProps
