import stls from '@/styles/components/general/ProgramType.module.sass'
import { useContext } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { routes } from '@/config/index'
import { ContextStaticProps } from '@/context/index'

const ProgramType = ({ close = null }) => {
  const { curProgramsType, curProgramsStudyFieldSlug } =
    useContext(ContextStaticProps)

  const slug = curProgramsStudyFieldSlug ? curProgramsStudyFieldSlug : ''

  // console.log(slug)

  return (
    <div className={stls.container}>
      <p className={stls.p}>Тип обучения:</p>

      <Link href={`${routes.front.programs}/${slug}`}>
        <a className={stls.item} onClick={close && close}>
          <div
            className={cn({
              [stls.circle]: true,
              [stls.active]: curProgramsType === null
            })}></div>{' '}
          <span className={stls.text}>Любой</span>
        </a>
      </Link>

      <Link href={`${routes.front.professions}/${slug}`}>
        <a className={stls.item} onClick={close && close}>
          <div
            className={cn({
              [stls.circle]: true,
              [stls.active]: curProgramsType === 'profession'
            })}></div>
          <span className={stls.text}>Профессия</span>
        </a>
      </Link>

      <Link href={`${routes.front.courses}/${slug}`}>
        <a className={stls.item} onClick={close && close}>
          <div
            className={cn({
              [stls.circle]: true,
              [stls.active]: curProgramsType === 'course'
            })}></div>
          <span className={stls.text}>Курс</span>
        </a>
      </Link>
    </div>
  )
}

export default ProgramType
