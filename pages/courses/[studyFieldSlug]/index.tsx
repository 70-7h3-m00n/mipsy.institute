import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { TypePageProgramsProps } from '@/types/index'
import { routes } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { PagesPrograms } from '@/components/pages'
import { useHandleContextStaticProps } from '@/hooks/index'
import { SeoPagesPrograms } from '@/components/seo'

const CoursesStudyFieldPage: NextPage<TypePageProgramsProps> = ({
  programs,
  studyFieldSlug
}) => {
  useHandleContextStaticProps({
    programs,
    curProgramsType: 'course',
    curProgramsStudyFieldSlug: studyFieldSlug
  })

  return (
    <>
      <SeoPagesPrograms
        programs={programs}
        ofType='course'
        curProgramsStudyFieldSlug={studyFieldSlug}
      />
      <PagesPrograms ofType='course' />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routes.front.programs, type: 'Course' })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.programs })

export default CoursesStudyFieldPage
