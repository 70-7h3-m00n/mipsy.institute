import { GetStaticProps, NextPage } from 'next'
import { TypePageProgramsProps } from '@/types/index'
import { routes } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { PagesPrograms } from '@/components/pages'
import { SeoPagesPrograms } from '@/components/seo'

const ProgramsPage: NextPage<TypePageProgramsProps> = ({ programs }) => {
  useHandleContextStaticProps({ programs })

  return (
    <>
      <SeoPagesPrograms programs={programs} />
      <PagesPrograms />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.programs })

export default ProgramsPage
