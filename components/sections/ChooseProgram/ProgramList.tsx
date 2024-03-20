import routes from '@/config/routes'
import { ContextStaticProps } from '@/context/index'
import filterProgramsByStudyField from '@/helpers/filterProgramsByStudyField'
import styles from '@/styles/components/sections/ChooseProgram/ProgramList.module.sass'
import { useContext, useState } from 'react'
import Program from './Program'

export default function ProgramList({ ofType = null, currentType = null }) {
  const [hoveredSlug, setHoveredSlug] = useState(null)

  const studyFields = [
    
    { label: 'Общая психология', slug: 'obshaya-psihologiya' },
    { label: 'Клиническая психология', slug: 'klinicheskaya-psihologiya' },
    {
      label: 'Организационная психология',
      slug: 'organizacionnaya-psihologiya'
    },
    {
      label: 'Диетология и нутрициология',
      slug: 'dietologiya-i-nutriciologiya'
    },
    { label: 'Консультирование', slug: 'konsultirovanie' },
    { label: 'Детская психология', slug: 'detskaya-psihologiya' },
    { label: 'Психотерапия', slug: 'psihoterapiya' },
  ]

  const studyFieldsProfessions = [
    { label: 'Консультирование', slug: 'konsultirovanie' },
    { label: 'Детская психология', slug: 'detskaya-psihologiya' },
    { label: 'Психотерапия', slug: 'psihoterapiya' },
    { label: 'Общая психология', slug: 'obshaya-psihologiya' },
    { label: 'Клиническая психология', slug: 'klinicheskaya-psihologiya' },
    {
      label: 'Организационная психология',
      slug: 'organizacionnaya-psihologiya'
    },
    {
      label: 'Диетология и нутрициология',
      slug: 'dietologiya-i-nutriciologiya'
    },
    
  ]

  const studyFieldsCourses = [
    { label: 'Консультирование', slug: 'konsultirovanie' },
    { label: 'Детская психология', slug: 'detskaya-psihologiya' },
    { label: 'Общая психология', slug: 'obshaya-psihologiya' },
    { label: 'Психотерапия', slug: 'psihoterapiya' },
    
    {
      label: 'Организационная психология',
      slug: 'organizacionnaya-psihologiya'
    }
  ]

  const list =
    ofType === 'course'
      ? studyFieldsCourses
      : ofType === 'profession'
      ? studyFieldsProfessions
      : studyFields

  const [openListIndex, setOpenListIndex] = useState(-1)

  return (
    <div className={styles.program}>
      {list.map(({ label, slug }, index) => (
        <Program
          ofType={ofType}
          setHoveredSlug={setHoveredSlug}
          index={index}
          slug={slug}
          key={`${slug}-${index}`}
          label={label}
          href={`${
            currentType === 'course'
              ? routes.front.courses
              : currentType === 'profession'
              ? routes.front.professions
              : routes.front.professions
          }/${slug}`}
          openListIndex={openListIndex} // Передаем состояние открытого списка
          setOpenListIndex={setOpenListIndex}
        />
      ))}
    </div>
  )
}
