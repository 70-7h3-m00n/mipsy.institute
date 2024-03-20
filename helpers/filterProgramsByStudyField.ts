type FilterProgramsByStudyFieldKey = string

type FilterProgramsByStudyFieldProp = {
  // programs: [{ [key: string]: any; type: FilterProgramsByStudyFieldKey }]
  programs: { [key: string]: any; type: FilterProgramsByStudyFieldKey }[]
  studyFieldSlug: string
}

const filterProgramsByStudyField = ({
  programs = [{ type: '' }],
  studyFieldSlug
}: FilterProgramsByStudyFieldProp) => {
  if (!studyFieldSlug)
    throw new Error(
      "You've passed in falsy prop 'studyFieldSlug' somewhere or haven't specified it. Prop 'studyFieldSlug' can't be falsy and has to be a string"
    )

  return (
    programs &&
    programs.filter(
      program =>
        program?.studyFieldSlug &&
        program?.studyFieldSlug.toLowerCase() === studyFieldSlug.toLowerCase()
    )
  )
}

export default filterProgramsByStudyField
