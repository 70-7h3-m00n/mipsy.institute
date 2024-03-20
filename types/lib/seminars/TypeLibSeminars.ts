import { TypeLibGeneralPicture } from '@/types/index'

type TypeLibSeminars = {
  id: string | null
  title?: string | null
  slug?: string | null
  studyField?: string | null
  studyFieldSlug: string | null
  text: string | null
  date: Date | null
  picture?: TypeLibGeneralPicture | null
} | null

export default TypeLibSeminars