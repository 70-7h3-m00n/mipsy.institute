import { removeDuplicates } from '@/helpers/index'

type getStudyFieldsSlugsType = {
  [key: string]: any
  studyFieldSlug: string
}[]

const getStudyFieldsSlugs = (programs: getStudyFieldsSlugsType) => {
  const duplicates = programs.map(item => item.studyFieldSlug)
  const output = removeDuplicates(duplicates)
  return output
}

export default getStudyFieldsSlugs
