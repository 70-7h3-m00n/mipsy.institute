import stls from '@/styles/components/layout/ProgramsFilters.module.sass'
import StudyFields from '@/components/general/StudyFields'
import ProgramType from '@/components/general/ProgramType'

type ProgramsFiltersType = {
  ofType?: 'profession' | 'course' | null
  close?: any
}

const ProgramsFilters = ({ ofType = null, close }: ProgramsFiltersType) => {
  return (
    <div className={stls.container}>
      <StudyFields aside ofType={ofType} close={close} />
      <div className={stls.divider}></div>
      <ProgramType close={close} />
    </div>
  )
}

export default ProgramsFilters
