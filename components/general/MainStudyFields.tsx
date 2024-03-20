import stls from '@/styles/components/general/MainStudyFields.module.sass'
import { Fragment, useContext, useEffect } from 'react'
import cn from 'classnames'
import { routes } from '@/config/index'
import { ContextStaticProps } from '@/context/index'
import { BtnField } from '@/components/btns'
import { useRouter } from 'next/router'
import Link from 'next/link'

type StudyFieldsType = {
  ofType?: 'course' | 'profession' | null
  close?: any
  setCurrentType?: (type: string) => void;
  currentType?: string
}

const MainStudyFields = ({
  setCurrentType,
  close = null,
  currentType
}: StudyFieldsType) => {
  const list = [{id:1, label: 'Дополнительное образование', href: routes.front.programs, programType: 'null'}, {id:1, label: 'Профессиональная переподготовка', href: routes.front.professions, programType: 'profession'}, {id:1, label: 'Повышение квалификации', href: routes.front.courses, programType: 'course'}]

  return (
    <ul
      className={stls.wrapper}>
      {list.map(({ label, href, programType }, idx) => (
        <Fragment key={idx}>
          <li className={cn({
              [stls.studyField]: true,
              [stls.active]: currentType === programType
            })}  onClick={close && close }>
            {/* <BtnField */}
            <Link href={href} passHref>
                <a
                  onMouseEnter={() => setCurrentType(programType)}
                  className={cn({
              [stls.mainFields]: true,
              [stls.active]: currentType === programType
            })} 
                >
                  {label}
                </a>
            </Link>
            {/* </BtnField> */}
          </li>
        </Fragment>
      ))}
    </ul>
  )
}

export default MainStudyFields
