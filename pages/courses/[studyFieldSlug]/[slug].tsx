import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { TypePageProgramProps } from '@/types/index'
import { routes } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { PagesProgram } from '@/components/pages'
import { SeoPagesProgram } from '@/components/seo'
import { useRouter } from 'next/router'

const CoursePage: NextPage<TypePageProgramProps> = ({
  programs,
  program,
  reviews,
  studyFieldSlug
}) => {
  useHandleContextStaticProps({
    programs,
    program,
    curProgramsType: 'course',
    curProgramsStudyFieldSlug: studyFieldSlug
  })

  const programOverview = program?.programOverview
  const router = useRouter()
  const segments = router.asPath.split("/").filter(segment => segment !== "");

  const labels =['Повышение квалификации', program?.studyField, program?.title]
  const breadcrumbs = segments.map((segment, index) => {
    const breadcrumb = {
      label: labels[index],
      path: "/" + segments.slice(0, index + 1).join("/")
    };
    return breadcrumb;
  });

const slug = program.slug

  return (
    <>
      <SeoPagesProgram
        program={program}
        ofType='course'
        curProgramsStudyFieldSlug={studyFieldSlug}
      />
      <PagesProgram 
      slug={slug} breadcrumbs={breadcrumbs} programOverview={programOverview} reviews={reviews} ofType={'course'} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routes.front.program, type: 'Course' })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({
    context,
    page: routes.front.program,
    type: 'Course'
  })

export default CoursePage
