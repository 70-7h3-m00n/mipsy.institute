import { GetStaticProps, NextPage } from 'next'
import { TypeLibTeachers, TypePageTeachersProps } from '@/types/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { sortBasedOnNumericOrder } from '@/helpers/index'
import { routes, company } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { MeetYourTeachers } from '@/components/sections'
import { SeoOrganizationJsonLd } from '@/components/seo'

const TeachersPage: NextPage<TypePageTeachersProps> = ({
  programs,
  teachers
}) => {
  useHandleContextStaticProps({ programs })

  const teachersSorted: TypeLibTeachers = sortBasedOnNumericOrder({ teachers })

  const seoParams = {
    title: `Преподаватели | ${company.desc} | ${company.name}
    `,
    desc: truncate(
      `${teachersSorted[0].name}, ${teachersSorted[0].achievements} | ${teachersSorted[1].name}, ${teachersSorted[1].achievements}`,
      120
    ),
    canonical: `${routes.front.root}${routes.front.teachers}`
  }
  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        openGraph={{
          url: seoParams.canonical,
          title: seoParams.title,
          description: seoParams.desc,
          images: [
            {
              url: `${routes.front.root}${routes.front.assetsImgsIconsManifestIcon512}`,
              width: 512,
              height: 512,
              alt: company.name,
              type: 'image/png'
            }
          ],
          site_name: company.name
        }}
      />
      <SeoOrganizationJsonLd />
      <MeetYourTeachers teachers={teachersSorted} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.teachers })

export default TeachersPage
