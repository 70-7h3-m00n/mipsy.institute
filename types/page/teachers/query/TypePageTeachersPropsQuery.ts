import { TypeLibPrograms, TypeLibTeachers } from '@/types/index'

type TypePageTeachersPropsQuery = {
  readonly programs: TypeLibPrograms | null
  readonly teachers: TypeLibTeachers | null
}

export default TypePageTeachersPropsQuery
