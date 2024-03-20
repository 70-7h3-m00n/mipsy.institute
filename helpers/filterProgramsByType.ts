type ProgramTypeKey = 'course' | 'profession' | ''

// TODO: figure out better types
type FilterProgramsProp = {
  // programs: [{ [key: string]: any; type: ProgramTypeKey }]
  programs: any
  type: 'course' | 'profession'
}

const filterProgramsByType = ({
  programs = [{ type: '' }],
  type
}: FilterProgramsProp) => {
  if (!type)
    throw new Error(
      "You've passed in falsy prop 'type' somewhere or haven't specified it. Prop 'type' can't be falsy and has to be a string with either 'course' or 'profession' as a value"
    )

  return (
    programs &&
    programs.filter(
      program => program.type && program.type.toLowerCase() === type
    )
  )
}

export default filterProgramsByType
