import { TypeLibGeneralPicture } from '@/types/index'

type TypeLibReview = {
  id: string | null
  name: string | null
  profession: string | null
  title: string | null
  story: string | null
  createdAt: string | null
  picture: TypeLibGeneralPicture | null
  index_number?: {
    idx?: number | null
  } | null
} | null

export default TypeLibReview
