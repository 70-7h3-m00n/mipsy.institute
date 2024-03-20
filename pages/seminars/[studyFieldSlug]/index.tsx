import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { TypePageProgramsProps } from '@/types/index'
import { routes } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { PagesPrograms } from '@/components/pages'
import { SeoPagesPrograms } from '@/components/seo'
import Wrapper from '@/components/layout/Wrapper'
import StudyFieldSlugFilter from '@/components/general/StudyFieldSlugFilter'
import Seminars from '@/components/sections/SlugTags'
import { useRouter } from 'next/router'
import { useState } from 'react'
import SeminarCard from '@/components/sections/SlugTags'
import SlugTags from '@/components/sections/SlugTags'

const SeminarsStudyFieldPage = ({
  events
}) => {
  const router = useRouter();
  const { studyFieldSlug } = router.query;
  // console.log(seminars)

  // Фильтрация семинаров по studyFieldSlug
  const filteredSeminars = events?.filter((seminar) => seminar.studyFieldSlug === studyFieldSlug);
  return (
    <>
      <Wrapper>
        <h1>Семинары слаг</h1>
      {/* <StudyFieldSlugFilter props={events} slug='seminars'/>
      <SlugTags props={filteredSeminars} slug='seminars' withDate/> */}
    </Wrapper>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routes.front.seminars })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.seminars })

export default SeminarsStudyFieldPage