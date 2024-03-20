import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { TypePageProgramsProps } from '@/types/index'
import { routes } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { PagesPrograms } from '@/components/pages'
import { SeoPagesPrograms } from '@/components/seo'
import { useRouter } from 'next/router'
import Wrapper from '@/components/layout/Wrapper'
import ArticlesDynamicZones from '@/components/articles/ArticlesDynamicZones'
import { Cta } from '@/components/sections'
import { BtnAlpha } from '@/components/btns'
import PopupTrigger from '@/components/general/PopupTrigger'
import SeminarTickets from '@/components/sections/SeminarTickets'

const SeminarsSlugPage = (
  { seminar }
) => {

  useHandleContextStaticProps({
    seminar
  })
// const title = seminar[0].title
// const text = seminar[0].text

  const router = useRouter();
  const {slug, studyFieldSlug} = router.query
  const date = new Date(seminar.date)
  console.log(seminar)

  return (
    <Wrapper>
    <p>{seminar.title}</p>
    <p>{seminar.text}</p>
    <SeminarTickets />
    <p>{seminar.price} рублей</p>
    <PopupTrigger btn='eta' cta='buyTicket' />
    {/* {seminar.article.map((module, idx) => (
      <ArticlesDynamicZones key={idx} props={module} />
    ))} */}
      {/* <SeoPagesPrograms
        programs={programs}
        curProgramsStudyFieldSlug={studyFieldSlug}
      />
      <PagesPrograms /> */}
    </Wrapper>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routes.front.seminar })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.seminar })

export default SeminarsSlugPage
