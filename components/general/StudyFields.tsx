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
}

const StudyFields = ({
  aside = false,
  ofType = null,
  close = null,
  flexend = false,
  orang = false,
  smallText
}: StudyFieldsType) => {
  const {
    studyFields,
    studyFieldsCourses,
    studyFieldsProfessions,
    curProgramsType
  } = useContext(ContextStaticProps)

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
        [stls.flexend]: flexend
        // [stls.orang]: orang,
      })}>
      {list.map(({ label, slug }, idx) => (
        <Fragment key={slug + idx}>
          {/* {idx === 0 && (
            <li className={stls.studyField} onClick={close && close}>
              <BtnField smallText={smallText}
                href={
                  aside
                    ? curProgramsType === 'course'
                      ? routes.front.courses
                      : curProgramsType === 'profession'
                      ? routes.front.professions
                      : routes.front.programs
                    : routes.front.programs
                }
                aside={aside}>
                Все направления
              </BtnField>
            </li>
          )} */}
          <li className={stls.studyField} onClick={close && close}>
            <BtnField
              smallText={smallText}
              orang={orang}
              href={`${
                curProgramsType === 'course'
                  ? routes.front.courses
                  : curProgramsType === 'profession'
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

export default StudyFields
