import stls from '@/styles/components/cards/CardCourse.module.sass'
import Link from 'next/link'
import cn from 'classnames'
import { routes } from '@/config/index'
import ProgramStudyDuration from '@/components/program/ProgramStudyDuration'
import { IconArrowRight } from '@/components/icons'

const CardCourse = ({ course = null, threerow = false }) => {
  return (
    <Link
      href={`${routes.front.courses}/${course.studyFieldSlug || 'studyfield'}/${
        course.slug
      }`}>
      <a
        className={cn({
          [stls.container]: true,
          [stls.threerow]: threerow,
          [stls.fourrow]: !threerow
        })}>
        <span className={stls.type}>{course.typeLabel}</span>
        <h4 className={stls.title}>{course.title}</h4>
        {course.studyMounthsDuration && (
          <div className={stls.dur}>
            <ProgramStudyDuration
              studyMounthsDuration={course.studyMounthsDuration}
              monthsOnly
            />
          </div>
        )}
        <div className={stls.arrowRight}>
          <IconArrowRight />{' '}
        </div>
      </a>
    </Link>
  )
}

export default CardCourse
