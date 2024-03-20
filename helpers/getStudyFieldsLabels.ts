import { removeDuplicates } from '@/helpers/index'

type getStudyFieldsLabelsType = {
  [key: string]: any
  studyField: string
}[]

const getStudyFieldsLabels = (programs: getStudyFieldsLabelsType) => {
  const duplicates = programs?.map(item => item.studyField).filter(item => item)
  const output = removeDuplicates(duplicates)
  return output
}

export default getStudyFieldsLabels
