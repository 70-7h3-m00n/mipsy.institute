import { GetStaticProps, NextPage } from 'next'
import { routes } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import Seminars from '@/components/sections/SlugTags'
import { useRouter } from 'next/router'
import Wrapper from '@/components/layout/Wrapper'
import StudyFieldSlugFilter from '@/components/general/StudyFieldSlugFilter'
import { useState } from 'react'
import SeminarCard from '@/components/sections/SlugTags'

const CoursesPage = ({ events }) => {
  // useHandleContextStaticProps({
  //   seminars,
  //   curProgramsType: 'course'
  // })
//   const titles = seminars.map(item => item.title);
// const studyFields = seminars.map(item => item.studyField);

// console.log(titles); // Массив всех значений title
// console.log(studyFields)
console.log(events)

  return (
    <Wrapper>
      <h1>Семинары</h1>
      {/* <StudyFieldSlugFilter props={events} slug='seminars' />
      <SeminarCard props={events} slug='seminars' withDate/> */}
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.seminars })

export default CoursesPage