import { TypeLibGeneralPicture } from '@/types/index'

type TypeLibTeacher = {
  id: string | null
  name: string | null
  achievements: string | null
  specialization: string | null
  portrait: TypeLibGeneralPicture | null
  index_number?: {
    idx?: number | null
  } | null
} | null

export default TypeLibTeacher
