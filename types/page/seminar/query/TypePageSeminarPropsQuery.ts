import { TypeLibSeminars } from '@/types/index'

type TypePageSeminarPropsQuery = {
  readonly seminar : | {
    studyFieldSlug: string | null
    slug: string | null
  }
| null
}

export default TypePageSeminarPropsQuery