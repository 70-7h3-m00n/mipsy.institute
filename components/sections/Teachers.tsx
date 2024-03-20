import stls from '@/styles/components/sections/Teachers.module.sass'
import { TypeLibTeachers } from '@/types/index'
import { useContext } from 'react'
import { getImageHeight, sortBasedOnNumericOrder } from '@/helpers/index'
import { ContextStaticProps } from '@/context/index'
import Wrapper from '@/components/layout/Wrapper'
import SwiperContainer from '@/components/general/SwiperContainer'
import CardTeacher from '@/components/cards/CardTeacher'
import {
  ImgTeacher,
} from '@/components/imgs'
import TagOrange from '../general/TagOrange'
import classNames from 'classnames'

type TeacherProps ={
  teachersRef?: React.RefObject<HTMLElement | null>
  teachersFromMain?: TypeLibTeachers
  title: string
  onMain?: boolean
}

const Teachers = ({teachersRef, teachersFromMain, title, onMain=false}: TeacherProps) => {
  const { program, curProgramsType } = useContext(ContextStaticProps)
  // const teachers: TypeLibTeachers =
  //   sortBasedOnNumericOrder({ teachers: program?.teachers }) || []
  let teachers = program?.teachers
  if(teachersFromMain) {
    teachers = teachersFromMain
  }
  

  const teachersSorted: TypeLibTeachers = sortBasedOnNumericOrder({ teachers })
  const list =
    teachersSorted &&
    [...teachersSorted]?.map(teacher => ({
      ...teacher,
      image: (
        <ImgTeacher
          src={teacher?.portrait?.url}
          alt={teacher.name}
          width={160}
          height={getImageHeight({
            width: 160,
            widthInitial: teacher?.portrait?.width,
            heightInitial: teacher?.portrait?.height
          })}
        />
      )
    }))

  const teachersSlides = list?.map((teacher, idx) => (
    <CardTeacher
      key={teacher.name + idx}
      portrait={teacher.image}
      name={teacher.name}
      specialization={teacher.specialization}
      achievements={teacher.achievements}
    />
  ))
  const mobileSwiperOptions = {
    slidesNum: 1,
    spaceBetween: 40
  }

  const tabletSwiperOptions = {
    slidesNum: 1,
    spaceBetween: 40
  }

  const laptopSwiperOptions = {
    slidesNum: 1.5,
    spaceBetween: 30
  }

  const desktopSwiperOptions = {
    slidesNum: 2,
    spaceBetween: 30
  }

  return (
    <section ref={teachersRef} className={classNames({
      [stls.container]: true,
      [stls.onProfessions]: !onMain,
      [stls.course]: curProgramsType === 'course'
    })}>
      <Wrapper>
        <h2 className={stls.title}>{title}</h2>
        {onMain && (
          <div className={stls.tag}>
            <TagOrange>
              Опыт
            </TagOrange>
          </div>
          
        )}
        <p className={stls.desc}>
          Преподают ведущие практикующие психологи и психотерапевты России{' '}
          <span className={stls.highlight}>с опытом от 7 до 25 лет</span>
        </p>
        <div className={stls.teachers}>
          <SwiperContainer
            // teachers
            slides={teachersSlides}
            mobileOptions={mobileSwiperOptions}
            tabletOptions={tabletSwiperOptions}
            laptopOptions={laptopSwiperOptions}
            desktopOptions={desktopSwiperOptions}
            // alwaysDisabledOnDesktop
            // isMultiRow
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default Teachers
