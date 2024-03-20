import { GetStaticProps, NextPage } from 'next'
import { TypePageProgramsProps } from '@/types/index'
import { routes } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { PagesPrograms } from '@/components/pages'
import { SeoPagesPrograms } from '@/components/seo'

const CoursesPage: NextPage<TypePageProgramsProps> = ({ programs }) => {
  useHandleContextStaticProps({
    programs,
    curProgramsType: 'course'
  })

  return (
    <>
      <SeoPagesPrograms programs={programs} ofType='course' />
      <PagesPrograms ofType='course' />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.programs })

export default CoursesPage
