import stls from '@/styles/components/general/StudyFields.module.sass'
import { Fragment, useContext } from 'react'
import cn from 'classnames'
import { routes } from '@/config/index'
import { ContextStaticProps } from '@/context/index'
import { BtnField } from '@/components/btns'

type StudyFieldsType = {
  aside?: boolean
  ofType?: 'course' | 'profession' | null
  close?: any
  flexend?: boolean
  smallText?: boolean
  onMain?: boolean
  orang?: boolean
  currentType?: string
}

const StudyFieldsOnMain = ({
  aside = false,
  ofType = null,
  close = null,
  flexend = false,
  orang = false,
  smallText,
  onMain,
  currentType
}: StudyFieldsType) => {
  // const {
  //   studyFields,
  //   studyFieldsCourses,
  //   studyFieldsProfessions,
  //   curProgramsType
  // } = useContext(ContextStaticProps)

  const studyFields = [
    {label: 'Консультирование',slug: 'konsultirovanie'},
    {label: 'Детская психология', slug: 'detskaya-psihologiya'},
    {label: 'Психотерапия', slug: 'psihoterapiya'},
    {label: 'Общая психология', slug: 'obshaya-psihologiya'},
    {label: 'Клиническая психология', slug: 'klinicheskaya-psihologiya'},
    {label: 'Организационная психология', slug: 'organizacionnaya-psihologiya'},
    {label: 'Диетология и нутрициология', slug: 'dietologiya-i-nutriciologiya'}
  ]

  const studyFieldsProfessions = [
    {label: 'Общая психология', slug: 'obshaya-psihologiya'},
    {label: 'Клиническая психология', slug: 'klinicheskaya-psihologiya'},
    {label: 'Организационная психология', slug: 'organizacionnaya-psihologiya'},
    {label: 'Диетология и нутрициология', slug: 'dietologiya-i-nutriciologiya'},
    {label: 'Консультирование',slug: 'konsultirovanie'},
    {label: 'Детская психология', slug: 'detskaya-psihologiya'},
    {label: 'Психотерапия', slug: 'psihoterapiya'},
    
  ]

  const studyFieldsCourses = [
    {label: 'Консультирование',slug: 'konsultirovanie'},
    {label: 'Детская психология', slug: 'detskaya-psihologiya'},
    {label: 'Психотерапия', slug: 'psihoterapiya'},
    {label: 'Общая психология', slug: 'obshaya-psihologiya'},
    {label: 'Организационная психология', slug: 'organizacionnaya-psihologiya'},
  ]

  const list =
    ofType === 'course'
      ? studyFieldsCourses
      : ofType === 'profession'
      ? studyFieldsProfessions
      : studyFields
      

  return (
    <ul
      className={cn({
        [stls.container]: true,
        [stls.aside]: aside,
        [stls.tooltip]: !aside,
        [stls.flexend]: flexend,
        // [stls.orang]: orang,
      })}>
      {list.map(({ label, slug }, idx) => (
        <Fragment key={slug + idx}>
          <li className={stls.studyField} onClick={close && close}>
            <BtnField
            smallText={smallText}
            orang={orang}
              href={`${
                currentType === 'course'
                    ? routes.front.courses
                    : currentType === 'profession'
                    ? routes.front.professions
                    : routes.front.programs
              }/${slug}`}
              aside={aside}
              slug={slug}>
              {label}
            </BtnField>
          </li>
        </Fragment>
      ))}
    </ul>
  )
}

export default StudyFieldsOnMain
