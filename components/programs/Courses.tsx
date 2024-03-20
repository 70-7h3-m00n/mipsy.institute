import stls from '@/styles/components/programs/Courses.module.sass'
import cn from 'classnames'
import { routes } from '@/config/index'
import ProgramsQty from '@/components/general/ProgramsQty'
import CardCourse from '@/components/cards/CardCourse'
import { BtnDelta } from '@/components/btns'

type CoursesType = {
  biggerTitle?: boolean
  withBtn?: boolean
  courses: any[]
  withQty?: boolean
  threerow?: boolean
}

const Courses = ({
  biggerTitle = false,
  withBtn = false,
  courses = [],
  withQty = false,
  threerow = false
}: CoursesType) => {
  return (
    <div className={stls.container}>
      {biggerTitle ? (
        <div className={stls.heading}>
          <h2
            className={cn({
              [stls.title]: true,
              [stls.bold]: true
            })}>
            Курсы повышения квалификации
          </h2>
          {withQty && (
            <div className={stls.phonetablet}>
              <ProgramsQty qty={courses.length} ofType='course' />
            </div>
          )}
        </div>
      ) : (
        <div className={stls.heading}>
          <h3 className={stls.title}>Курсы повышения квалификации</h3>
          {withQty && (
            <div className={stls.phonetablet}>
              <ProgramsQty qty={courses.length} ofType='course' />
            </div>
          )}
        </div>
      )}
      <div className={stls.underheading}>
        <p className={stls.subTitle}>
          Повышение квалификации для получения или обновления знаний в
          конкретной теме
        </p>
        {withQty && (
          <div className={stls.laptopdesktop}>
            <ProgramsQty qty={courses.length} ofType='course' dye='bgalpha' />
          </div>
        )}
      </div>
      <div
        className={cn({
          [stls.courses]: true,
          [stls.threerow]: threerow
        })}>
        {courses.map((course, idx) => (
          <CardCourse
            key={course.title + idx}
            course={course}
            threerow={threerow}
          />
        ))}
      </div>
      {withBtn && (
        <div className={stls.btn}>
          <BtnDelta text={'Смотреть все курсы'} href={routes.front.courses} />
        </div>
      )}
    </div>
  )
}

export default Courses
